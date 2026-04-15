// ✿ 1: Define the createLoginTracker Function as an Outer Function ✿
function createLoginTracker(userInfo) {
  // Initialize attemptCount to track the number of login attempts
  let attemptCount = 0;

  // ✿ 2: Use the Inner Arrow Function ✿
  const attemptLogin = (passwordAttempt) => {
    // ✿ Check if user account is already locked before incrementing ✿
    if (attemptCount >= 3) {
      return 'Account locked due to too many failed login attempts';
    }

    // ✿ Increment count for an attempt ✿
    attemptCount++;

    // ✿ Check if password matches ✿
    if (passwordAttempt === userInfo.password) {
      return 'Login successful';
    } else {
      // ✿ Return message  ✿
      return `Attempt ${attemptCount}: Login failed`;
    }
  };

  // ✿ Return the inner function to call it outside  ✿
  return attemptLogin;
}

// ✿ Export the function ✿
module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker }),
};
