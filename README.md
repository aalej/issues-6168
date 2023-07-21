# Repro for Firebase Tools issue 6168

### Steps to reproduce

1. Run `firebase emulators:start --project demo-project`
2. Open "localhost:5000" on your web browser and "http://localhost:4000/auth" in a different tab
3. Click the "Anonymous sign-in" link or navigate to "http://localhost:5000/anon.html"
4. Click "SIGN IN"
   1. Sign in as expected. Anonymous user is created in Auth emulator UI.
5. Navigate back to "http://localhost:5000/"
6. Click the "Link Google Provider" link or navigate to "http://localhost:5000/google-link.html"
7. Click "LINK TO PROVIDER" and log in
   1. Sign in as expected. Anonymous user is now liked to a Google provider
8. Logs on the terminal show that `beforeUserSignedIn` was triggered.
