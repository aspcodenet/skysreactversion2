__conf="
window.appEnv = {
    REACT_APP_BACKEND_URL: '$REACT_APP_BACKEND_URL'
}
"
echo "$__conf" > build/scripts/config.js
npx serve build