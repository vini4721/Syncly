import "./styles/style.css";
import { supabase } from "./supabase.js";

let isSignUpMode = false;

document.addEventListener("DOMContentLoaded", function () {
  // Handle email confirmation
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('type') === 'signup' || window.location.hash.includes('access_token')) {
    console.log('Email confirmed! Redirecting to dashboard...');
    setTimeout(() => {
      window.location.href = './dashboard.html';
    }, 2000);
    return;
  }

  const form = document.getElementById("auth-form");
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.querySelector("#email").value;
    const pass = document.querySelector("#password").value;

    if (isSignUpMode) {
      const result = await supabase.auth.signUp({
        email: email,
        password: pass,
      });

      if (result.error) {
        console.log("Error", result.error.message);
      } else {
        console.log("Success! Redirecting...");
        alert("Account created ✅ verify your email");
      }
    } else {
      const result = await supabase.auth.signInWithPassword({
        email: email,
        password: pass,
      });

      if (result.error) {
        alert("No account exists ❌");
      } else {
        console.log("Success! Redirecting...");
        window.location.href = "./dashboard.html";
      }
    }
  });

  document.querySelector("#toggle-btn").addEventListener("click", function () {
    isSignUpMode = !isSignUpMode;

    const title = document.querySelector("#form-title");
    const subtitle = document.querySelector("#form-subtitle");
    const submitBtn = document.querySelector("#submit-btn");
    const checkAcc = document.querySelector("#toggle-text");
    const toggleBtn = document.querySelector("#toggle-btn");

    if (isSignUpMode) {
      title.innerText = "Sign Up";
      subtitle.innerText = "Create a new account";
      submitBtn.innerText = "Sign Up";
      checkAcc.innerText = "Already have an account ?";
      toggleBtn.innerText = "Sign In";
    } else {
      title.innerText = "Sign In";
      subtitle.innerText = "Welcome back to Syncly";
      submitBtn.innerText = "Sign In";
      checkAcc.innerText = "Don't have an account ?";
      toggleBtn.innerText = "Sign Up";
    }
  });
});
