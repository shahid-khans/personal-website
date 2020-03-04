import React from 'react';

const Avatar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" overflow="hidden"><defs><radialGradient id="i" cx="100" cy="114" r="41" gradientUnits="userSpaceOnUse" className="svga-on-canvas-facehighlight-gradient-single-0"><stop stopOpacity=".5" stopColor="#fbe4dd" offset="0"/><stop stopOpacity="0" stopColor="#ecc4b8" offset=".9"/></radialGradient><radialGradient id="j" cx="100" cy="54" r="37" gradientUnits="userSpaceOnUse" className="svga-on-canvas-facehighlight-gradient-single-1"><stop stopOpacity=".5" stopColor="#fbe4dd" offset="0"/><stop stopOpacity="0" stopColor="#ecc4b8" offset=".9"/></radialGradient><radialGradient id="c" cx="125.903" cy="85.096" r="13.25" gradientTransform="matrix(-1.0996 .0423 .0635 .9207 206.549 .593)" gradientUnits="userSpaceOnUse" className="svga-on-canvas-eyesback-gradient-left-0"><stop stopColor="#fff" offset="0"/><stop stopColor="#fdfefe" offset=".544"/><stop stopColor="#f6f8f9" offset=".74"/><stop stopColor="#eaeff2" offset=".879"/><stop stopColor="#d9e3e8" offset=".992"/><stop stopColor="#d8e2e7" offset="1"/></radialGradient><radialGradient id="f" cx="125.541" cy="85.113" r="13.249" gradientTransform="matrix(1.0996 .0423 -.0635 .9207 -6.549 .593)" gradientUnits="userSpaceOnUse" className="svga-on-canvas-eyesback-gradient-right-0"><stop stopColor="#fff" offset="0"/><stop stopColor="#fdfefe" offset=".544"/><stop stopColor="#f6f8f9" offset=".74"/><stop stopColor="#eaeff2" offset=".879"/><stop stopColor="#d9e3e8" offset=".992"/><stop stopColor="#d8e2e7" offset="1"/></radialGradient><radialGradient id="d" cx="123.371" cy="81.442" fx="136.805" fy="80.36" r="17.038" gradientTransform="matrix(.9884 .1367 .1336 -.7354 -56.068 125.3)" gradientUnits="userSpaceOnUse" className="svga-on-canvas-eyesfront-gradient-left-3"><stop stopColor="#dda696" offset="0"/><stop stopOpacity=".3" stopColor="#dda696" offset=".7"/><stop stopOpacity="0" stopColor="#ecc4b8" offset="1"/></radialGradient><radialGradient id="e" cx="78.965" cy="81.143" r="26.237" gradientTransform="matrix(.7183 -.06 .0803 .6143 8.791 49.26)" gradientUnits="userSpaceOnUse" className="svga-on-canvas-eyesfront-gradient-left-4"><stop stopOpacity="0" offset=".95"/><stop stopOpacity=".2" offset="1"/></radialGradient><radialGradient id="g" cx="122.972" cy="81.425" fx="136.406" fy="80.344" r="17.037" gradientTransform="matrix(-.9884 .1367 -.1336 -.7354 255.271 125.342)" gradientUnits="userSpaceOnUse" className="svga-on-canvas-eyesfront-gradient-right-3"><stop stopColor="#dda696" offset="0"/><stop stopOpacity=".3" stopColor="#dda696" offset=".7"/><stop stopOpacity="0" stopColor="#ecc4b8" offset="1"/></radialGradient><radialGradient id="h" cx="79.515" cy="81.186" r="26.237" gradientTransform="matrix(-.7183 -.06 -.0803 .6143 191.208 49.267)" gradientUnits="userSpaceOnUse" className="svga-on-canvas-eyesfront-gradient-right-4"><stop stopOpacity="0" offset=".95"/><stop stopOpacity=".2" offset="1"/></radialGradient><linearGradient id="b" x1="100" y1="142" x2="100" y2="139" gradientUnits="userSpaceOnUse" className="svga-on-canvas-mouth-gradient-single-0"><stop stopColor="#e4b5a7" offset=".1"/><stop stopColor="#dda696" offset="1"/></linearGradient><linearGradient id="a" x1="100" y1="171" x2="100" y2="128" gradientUnits="userSpaceOnUse" className="svga-on-canvas-chinshadow-gradient-single-0"><stop stopOpacity=".8" stopColor="#dda696" offset="0"/><stop stopColor="#be725b" offset=".7"/></linearGradient></defs><path d="M100.387 101.765h-.816v-.85h.816v.85z" fill="#33291f"/><path d="M181.084 186.152c-1.867-4.034-6.966-10.012-12.631-11.664-7.003-2.043-22.812-4.512-28.673-5.885-4.7-1.101-14.163-9.6-17.48-12.452-.595-.51-1.082-1.563-1.094-2.346-.118-9.234 3.566-33.765 3.566-33.765H75.187s3.684 24.53 3.564 33.765c-.009.783-.499 1.836-1.092 2.346-3.317 2.853-12.78 11.35-17.48 12.452-5.862 1.373-21.67 3.927-28.672 5.97-5.667 1.65-10.765 7.544-12.631 11.578-3.152 6.807-3.897 19.125-3.897 29.75h170c0-10.624-.745-22.942-3.895-29.75z" fill="#ecc4b8"/><path d="M150.262 172.79c20.69 3.01 29.398 7.402 32.125 43.113h2.592c0-10.625-.745-22.944-3.895-29.75-1.867-4.035-6.966-10.013-12.631-11.664-7.003-2.043-22.812-4.512-28.673-5.885-4.7-1.101-15.506-10.258-18.397-13.897 2.856 3.998 10.872 13.264 17.896 15.69 3.36 1.162 6.158 1.69 10.983 2.393zm-89.582-2.392c7.024-2.426 15.04-11.693 17.896-15.691-2.89 3.638-13.697 12.796-18.396 13.897-5.862 1.373-21.67 3.926-28.673 5.969-5.666 1.65-10.765 7.545-12.631 11.579-3.15 6.807-3.896 19.125-3.896 29.75h2.593c2.71-35.483 11.453-40.106 32.125-43.113 4.823-.701 7.622-1.23 10.982-2.391z" fill="#fbe4dd"/><path d="M96.278 184.317s-4.313-1.367-6.02-2.022c-8.882-3.407-37.736-5.616-37.736-5.616s30.391 1.206 37.097 2.362c-.389-4.051-2.564-17.003-2.564-17.003s4.377 14.293 5.448 17.899c.573 1.927 3.775 4.38 3.775 4.38zm9.18-1.14c-.076.062-.163.143-.257.228.096-.073.183-.148.256-.228zm-9.18 1.14s2.46 2.544 3.695 2.576c1.624.043 4.104-2.464 5.229-3.488-1.076.813-3.535 1.182-4.514 1.22-1.13.043-4.41-.308-4.41-.308zm17.866-6.39c-1.314.21-3.728.67-3.728.67l1.943-12.657c-.549 2.61-3.802 13.78-6.902 17.237 1.624-1.374 5.235-2.033 7.076-2.299 8.7-1.261 8.697-1.26 34.903-4.199 0 0-24.71-.131-33.292 1.247z" fill="#dda696"/><path d="M181.084 186.152c-1.867-4.034-6.966-10.012-12.631-11.664-7.003-2.043-22.812-4.512-28.673-5.885-4.7-1.101-14.163-9.6-17.48-12.452-.595-.51-1.082-1.563-1.094-2.346-.118-9.234 3.566-33.765 3.566-33.765H75.187s3.684 24.53 3.564 33.765c-.009.783-.499 1.836-1.092 2.346-3.317 2.853-12.78 11.35-17.48 12.452-5.862 1.373-21.67 3.927-28.672 5.97-5.667 1.65-10.765 7.544-12.631 11.578-3.152 6.807-3.897 19.125-3.897 29.75h170c0-10.624-.745-22.942-3.895-29.75z" fill="none" stroke="#be725b" strokeWidth="1.275"/><g><path d="M124.272 162.248a3.725 3.725 0 01-.051-.515c-.094-7.38 1.819-22.721 3.098-32.078-15.699-1.984-38.937-1.975-54.637.016 1.279 9.359 3.19 24.687 3.094 32.062a3.11 3.11 0 01-.03.367c3.825 3.586 7.667 6.528 11.055 8.151 5.312 2.546 21.035 2.427 26.401 0 3.411-1.541 7.254-4.439 11.07-8.003z" fill="url(#a)" transform="matrix(.85 0 0 .85 14.98 16.34)"/></g><g><path d="M183.108 187.655c-8.907-17.237-26.056-14.794-42.473-19.417-.398 3.047-11.264 17.407-13.844 25.552-1.45-1.21-3.18-2.826-4.428-4.306-6.11-7.177-15.165-30.396-18.203-12.264.66-8.14 4.252-9.933 9.24-3.11 5.362 7.342 5.56 11.133 13.21 19.117 1.352-5.61 4.278-9.57 7.681-14.538 3.294-4.814 5.7-6.985 6.051-11.27-1.228-2.046-.934-2.963-2.919-4.289-12.456-8.425-3.563-16.974-14.854-19.01-.089 1.018-.2 2.16-.293 3.017 2.414 1.242 3.137 6.079-.581 9.62-5.908 6.486-15.402 6.809-17.877 16.765l-.006-.001c-.788 2.955-1.419 7.479-1.718 10.13l-2.087 21.164-2.1-20.788c-1.702-15.605-3.927-17.132-11.205-21.954-4.822-3.196-12.701-8.018-10.13-13.47.294-.63.651-1.018 1.094-1.31-.128-1.246-.202-1.968-.301-3.126-9.322.397-7.889 13.585-14.948 18.436-1.85 1.272-2.794 2.447-3.458 4.36.451 5.339 12.329 17.405 14.403 26.264 7.723-8.153 7.782-11.715 13.175-19.09 4.646-6.345 8.44-5.694 9.237 2.893-.438-2.58-1.477-6.53-3.728-6.53-1.854 0-3.787 2.736-4.744 4.056-5.354 7.376-6.214 12.652-14.15 19.238-.549-1.65-1.193-3.307-1.961-4.85-3.145-6.353-11.662-19.172-12.63-20.414-3.763 1.059-9.5 2.232-12.948 2.805-22.528 3.749-31.261 11.023-34.582 45.076 82.622-.837 116.29-.473 177.828-.473-.769-7.577-2.28-21.557-5.751-28.283z" fill="#18384b"/><path d="M133.953 178.506c-2.942 4.296-5.271 7.905-6.722 12.428 1.672-9.332 12.27-18.168 11.123-23.748-.491-2.39-8.947-7.72-9.385-15.64 2.334 7.257 11.044 12.437 11.058 15.914.023 5.69-.147 2.386-6.074 11.046zm54.84 36.758c.294-7.38-2.187-21.746-5.262-27.708-8.906-17.236-26.829-15.037-43.246-19.66-.145.185.417 1.41.023 1.937 38.377 7.072 42.747 15.502 48.484 45.431zm-126.374-52.66c4.715-3.907 6.129-7.692 7.211-11.06-2.422 13.839-6.044 8.605-8.687 15.535-1.511 3.964 10.203 14.793 11.786 23.854-2.076-3.549-4.3-7.916-7.243-12.212-2.29-3.346-3.748-6.406-6.017-8.982-1.081-5.706 1.152-5.644 2.95-7.135zm-2.95 7.136c-.394-.527-.76-1.023-.906-1.209-16.417 4.623-32.805 1.789-41.71 19.026-3.076 5.962-4.612 18.158-5.46 25.554 1.64-8.987 4.084-20.309 9.319-27.14 8.877-12.041 25.258-14.365 38.756-16.231z" fill="#26475a"/><path d="M116.85 162.024c-4.134 2.397-7.634 4.75-9.956 8.058 5.582.308 9.708 10.285 10.824 11.641-10.483-14.59-14.45-4.675-15.725 4.617.367-3.014.669-8.156 1.264-10.364.173-.878.36-1.717.556-2.455h.006c2.475-9.955 11.969-10.278 17.877-16.764 3.718-3.541 2.994-8.378.58-9.62.093-.858.205-1.999.294-3.017.62.113 1.172.248 1.684.399 7.616 6.699-2.209 15.18-7.404 17.505zm-34.75 0c4.134 2.397 9.19 5.237 11.505 8.26-4.078-.743-8.611 5.349-10.878 10.732 9.775-12.467 12.75-5.383 15.867 5.325-.367-3.013-1.296-8.156-1.89-10.364a38.953 38.953 0 00-.557-2.455h-.005c-2.475-9.956-11.63-10.278-17.538-16.764-3.718-3.541-3.078-8.378-.664-9.62-.092-.858-.204-1.999-.292-3.017-.62.113-1.172.248-1.685.399-6.381 7.792 1.467 14.671 6.137 17.504z" fill="#0d2a3c"/><path d="M121.974 155.165c.026-4.846-.135-2.157.355-7.642 1.89 1.015 2.131 5.177-.355 7.642zm-43.977-.458c-1.974-2.584-2.218-5.223-.295-7.217.461 4.3.227 3.781.295 7.217z" fill="#051e2c"/><path d="M140.46 166.718c-.175-3.01-6.641-5.521-9.51-12.049-2.055-4.65-.105-9.973-8.555-10.83-.464 2.71-.874 8.665-.751 11.543-4.282 4.61-10.906 5.802-15.117 10.758-4.495 5.29-6.443 16.745-6.517 40.517l1.047-.68s1.166-22.513 1.175-22.58c2.621-22.462 10.955-17.157 19.532-26.573 3.843-3.682 2.925-8.561.614-9.743.1-.952.193-1.895.276-2.848 7.269 1.335 5.192 5.614 7.466 10.84 3.023 6.948 8.753 8.465 9.122 11.835.587 5.339-2.599 7.605-5.794 12.269-5.026 7.275-6.188 10.986-6.886 13.861-7.629-8.012-7.633-11.524-13.088-18.987-5.818-7.961-9.638-4.228-11.242 9.347.165-2.232 3.204-14.599 6.836-12.454 4.198 2.447 8.323 12.842 13.227 18.603 1.308 1.55 2.993 3.105 4.543 4.405 2.896-10.112 13.6-20.795 13.947-25.674 16.74 4.723 45.423-.123 47.975 47.568-34.967.187-72.943-.58-177.624.471 1.517-15.671 4.083-31.031 13.364-37.955 3.982-2.98 8.6-4.54 13.355-5.531 6.628-1.374 14.044-2.257 20.615-4.035.67.85 12.075 18.018 14.64 25.157 9.234-7.228 12.927-20.79 18.01-23.132 3.54-1.626 6.426 10.147 6.59 12.37-1.385-14.357-5.907-19.055-14.47-4.184-4.22 7.33-5.338 9.317-9.826 14.033-1.802-7.645-14.36-22.06-13.815-26.063.54-3.949 5.367-2.858 8.583-11.257 1.804-4.709 1.405-9.9 9.102-11.437.084.992.185 1.972.286 2.963-2.107 1.387-2.643 6.045.724 9.301 3.032 3.472 8.503 5.454 12.117 8.225 4.26 3.287 5.944 6.653 7.3 18.42.03.256 1.164 22.9 1.164 22.9l1.133.567c-.567-23.658-2.835-37.883-7.413-41.87-3.954-3.527-10.858-5.776-14.21-9.714.103-2.955-.48-8.94-.843-11.195-7.658.78-7.875 5.642-9.517 9.887-4.39 11.348-8.614 8.098-9.313 12.8-.066.44.035.77.142 1.355-6.443 1.316-14.484 2.178-20.945 3.36-9.642 1.76-18.738 6.85-22.886 16.534-3.151 7.35-4.064 20.443-4.295 28.512-.01.057-.01.124-.01.182.13.01.267.01.396.01 110.904 1.18 177.182-.49 178.104-.49.325-45.357-24.467-43.373-48.758-49.312zm-18.401-11.807c.013-2.493.09-5.38.27-7.388 1.358.97 2.413 4.19-.27 7.388zm-44.105-.367c-2.254-2.95-1.36-5.81-.337-6.8.214 1.995.298 4.787.337 6.8z" fill="#01121d"/></g><g><path d="M57.543 86.278c-.78-2.008-6.526-4.846-9.052-4.398-2.857.506-3.907 3.517-3.528 5.748.89 5.239 3.227 7.445 4.277 11.536.885 3.45 2.772 5.436 3.704 6.903 1.147 1.799 2.205 5.928 2.442 6.53.373.953 1.698 3.265 4.039 3.146 2.691-.139 6.092-5.4 6.148-6.569.308-6.339-5.999-17.668-8.03-22.896z" fill="#ecc4b8" stroke="#be725b" strokeWidth="1.21125"/><path d="M58.137 107.64s.346-.864-.076-1.632c-.543-.988-1.957-2.8-2.278-3.885-.263-.887-.13-2.782-.172-3.709-.076-1.64-1.205-2.762-1.556-3.702-2.353-6.293-5.485-10.193-7.268-11.003-1.318 3.22-.273 5.577 1.567 10.534-1.11-6.737-.044-8.843-.044-8.843s3.245 2.798 4.846 9.022c.29 1.123-.897 3.467-.67 4.607.284 1.43 3.378 4.2 4.245 5.357.676.902 1.406 3.255 1.406 3.255z" fill="#be725b"/><path d="M142.193 86.278c.78-2.008 6.526-4.846 9.053-4.398 2.857.506 3.906 3.517 3.528 5.748-.892 5.239-3.227 7.445-4.278 11.536-.885 3.45-2.773 5.436-3.705 6.903-1.146 1.799-2.204 5.928-2.44 6.53-.375.953-1.7 3.265-4.04 3.146-2.69-.139-6.092-5.4-6.147-6.569-.31-6.339 5.999-17.668 8.029-22.896z" fill="#ecc4b8" stroke="#be725b" strokeWidth="1.21125"/><path d="M141.6 107.64s-.348-.864.075-1.632c.543-.988 1.957-2.8 2.277-3.885.262-.887.13-2.782.174-3.709.076-1.64 1.203-2.762 1.555-3.702 2.353-6.293 5.485-10.193 7.268-11.003 1.318 3.22.273 5.577-1.566 10.534 1.11-6.737.043-8.843.043-8.843s-3.245 2.798-4.847 9.022c-.288 1.123.897 3.467.67 4.607-.284 1.43-3.378 4.2-4.244 5.357-.676.902-1.406 3.255-1.406 3.255z" fill="#be725b"/><path d="M135.887 124.28c-4.083 8.69-16.359 24.167-25.134 28.27-4.379 2.05-17.209 2.15-21.543 0-8.687-4.305-21.024-19.594-25.134-28.27-4.58-9.666-12.118-41.262-12.128-41.307a54.973 54.973 0 01-1.635-13.277C50.27 40.8 72.47 17.348 99.903 17.304c27.434-.045 49.705 23.333 49.745 52.227.008 4.589-.546 9.04-1.592 13.283-.014.045-7.603 31.746-12.17 41.466z" fill="#ecc4b8"/><path d="M108.263 18.039c22.027 5.386 38.431 26.186 38.395 51.023a55.02 55.02 0 01-1.636 13.277c-.01.046-7.025 31.652-11.53 41.309-3.965 8.502-16.075 23.343-24.534 27.637-1.765.897-7.095 1.322-8.977 1.322-1.883 0-7.211-.425-8.976-1.322-8.46-4.294-20.57-19.135-24.535-27.637-4.505-9.657-11.52-41.263-11.53-41.309a54.975 54.975 0 01-1.635-13.277c-.037-24.837 16.366-45.637 38.394-51.023-23.52 4.16-41.425 25.707-41.386 51.657a54.973 54.973 0 001.635 13.277c.01.045 7.533 31.648 12.128 41.307 4.123 8.668 16.49 23.868 25.134 28.27 2.169 1.106 7.593 1.577 10.57 1.575 2.975.003 8.806-.469 10.973-1.574 8.645-4.404 21.01-19.603 25.134-28.27 4.594-9.66 12.119-41.263 12.127-41.308a54.973 54.973 0 001.635-13.277c.04-25.95-17.866-47.497-41.386-51.657z" fill="#e4b5a7"/><path d="M144.004 126.997c-5.003 10.225-20.047 28.437-30.801 33.266-5.366 2.412-21.089 2.53-26.401 0-10.646-5.067-25.765-23.057-30.801-33.266-5.613-11.374-14.851-48.553-14.863-48.607a62.25 62.25 0 01-2.004-15.623c-.052-34 27.154-61.598 60.772-61.65 33.621-.053 60.913 27.457 60.963 61.456a62.316 62.316 0 01-1.952 15.631c-.016.052-9.317 37.355-14.913 48.793z" fill="none" stroke="#be725b" strokeWidth="1.5" transform="matrix(.816 0 0 .84983 18.38 16.354)"/><path d="M100.389 141.808c-3.458 0-4.907-2.678-4.907-2.678l9.74-.188c0-.001-1.789 2.866-4.833 2.866z" fill="url(#b)" transform="matrix(.85 0 0 .85 14.98 16.34)"/><path d="M98.976 134.666c-1.514 0-2.665-.146-2.746-.157-.124-.017-.21-.124-.194-.24.017-.117.134-.193.256-.181.034.005 5.171.425 7.953-.166.133-.026.246.048.273.16a.215.215 0 01-.171.255c-1.198.254-4.286.329-5.37.329zm-12.264-4.575c-.31-.564 3.482.094 5.771-.469 2.533-.622 5.186.177 7.763.408 2.025.18 4.112-.83 6.112-.371 2.772.635 7.001-.167 6.667.505-.232.466-4.159.892-6.395.513-1.956-.331-3.98.473-5.955.62-2.453.185-4.902-1.176-7.322-.792-2.79.443-6.378.065-6.641-.414z" fill="#be725b"/><path d="M76.732 78.383c4.587.679 7.931 3.488 10.773 7.94.004.005.013.004.018.008.007.027.021.053.026.08.255 1.007-.816 1.819-2.155 2.438-4.771.609-9.359 1.489-14.194.87-9.681-1.241-9.855-5.509-10.326-6.629-.252-1.101-.325-1.417-.311-2.473 2.332-1.366 4.043-1.647 5.854-2.005 2.124-.418 6.851-.744 10.315-.229z" fill="url(#c)" transform="matrix(.8075 0 0 .8075 19.85 20.772)"/><path d="M84.48 89.884a4.831 4.831 0 01-5.943 3.388 4.854 4.854 0 01-3.403-5.952 4.834 4.834 0 015.947-3.39 4.854 4.854 0 013.4 5.954z" fill="#4d3623" stroke="#1f1105" strokeWidth=".40375"/><path d="M83.727 89.944c-.685 1.98-2.75 3.134-4.763 2.583-1.857-.51-3.03-2.292-2.877-4.176.689-.054 1.443-.07 2.225-.032-.008.027-.021.05-.029.078-.247.908.329 1.86 1.286 2.123.96.264 1.939-.263 2.186-1.171.031-.12.048-.238.052-.355.657.24 1.301.548 1.92.95z" fill="#5c4633"/><path d="M80.464 87.156c-.972-.278-1.962.276-2.212 1.244-.251.961.333 1.968 1.303 2.247.972.279 1.962-.276 2.213-1.239.253-.967-.333-1.973-1.304-2.252zm.211 3.418c-.404.126-.821-.042-.932-.374-.107-.331.132-.7.539-.822.406-.126.823.04.934.37.11.332-.131.7-.54.826z" opacity=".9"/><path d="M77.232 91.153c-.299.179-.745.018-1-.361-.255-.377-.217-.827.083-1.007.297-.177.747-.017 1 .36.252.377.216.83-.083 1.008z" fill="#fff" opacity=".6"/><path d="M83.61 88.392c-.683.41-1.71.04-2.29-.824-.582-.866-.495-1.9.188-2.307.682-.411 1.71-.043 2.289.823.58.865.497 1.897-.187 2.308z" fill="#fff" opacity=".8"/><g><path d="M64.353 88.265c2.604 9.137 6.036 18.825 14.28 19.113s17.875-5.846 18-17.958c.14-13.539-8.458-18.88-16.702-19.167s-19.458 4.39-15.578 18.012zm4.654-.398c-.204-.89-.263-1.144-.251-1.997 1.636-.977 3.262-1.25 4.724-1.538 1.715-.338 5.534-.683 8.331-.266 3.704.548 6.405 2.816 8.7 6.411.003.004.01.004.014.007.006.022.017.043.021.065.206.813-.659 1.468-1.74 1.968-3.853.492-7.558 1.203-11.462.703-7.817-1.002-7.958-4.449-8.337-5.353z" fill="#ecc4b8"/><path d="M74.225 95.171c9.256 1.401 17.847-3.01 19.186-9.859 1.34-6.849-5.072-13.537-14.329-14.94-9.258-1.399-17.845 3.012-19.185 9.862-1.34 6.848 5.07 13.532 14.328 14.937zM60.563 80.617c2.125-1.141 4.04-1.547 5.851-1.905 2.123-.418 6.853-.845 10.317-.329 4.587.679 7.931 3.488 10.773 7.94.004.005.013.004.018.008.007.027.021.053.026.08.255 1.007-.816 1.819-2.155 2.438-4.771.609-9.359 1.489-14.194.87-9.681-1.241-9.855-5.509-10.326-6.629-.251-1.101-.323-1.418-.31-2.473z" fill="url(#d)" transform="matrix(.8075 0 0 .8075 19.85 20.772)"/><path d="M60.875 83.09c-.252-1.101-.325-1.417-.311-2.473 2.092-1.175 4.04-1.547 5.851-1.905 2.123-.418 6.853-.845 10.317-.329 4.587.679 7.931 3.488 10.773 7.94.004.005.013.004.018.008.007.027.021.053.026.08.255 1.007-.816 1.819-2.155 2.438-4.771.609-9.359 1.489-14.194.87-9.681-1.241-9.855-5.509-10.325-6.629z" fill="url(#e)" transform="matrix(.8075 0 0 .8075 19.85 20.772)"/><path d="M81.484 81.938c2.66.435 5.253 1.659 7.655 3.186.515.326 1.103.698 2.036 1.171-.669-.151-1.287-.498-1.864-.816a12.437 12.437 0 011.6 1.885c-2.036-2.551-5.892-4.472-9.173-5.127-3.151-.63-8.874-.213-13.123 1.649 3.89-2.19 9.567-2.487 12.87-1.948z" fill="#be725b"/><path d="M90.513 90.44c-2.299-3.504-5-5.718-8.706-6.255-3.902-.57-9.101-.179-12.14 1.488-.248.136-1.297 1.008-1.131.094.706-.942 3.49-2.037 4.84-2.364 15.136-3.669 18.004 8.31 17.137 7.037zm-21.691-2.774c-.578 1.666.695 5.373 8.192 6.058 5.325.487 12.732-1.413 11.817-1.302-3.86.476-7.57 1.17-11.482.677-8.868-1.114-7.863-5.286-8.527-5.433z" fill="#131111"/></g><g><path d="M122.867 78.383c-4.586.679-7.931 3.488-10.773 7.94-.004.005-.012.004-.018.008-.006.027-.02.053-.025.08-.256 1.007.815 1.819 2.154 2.438 4.771.609 9.359 1.489 14.194.87 9.681-1.241 9.855-5.509 10.325-6.629.253-1.101.325-1.417.312-2.473-2.331-1.366-4.043-1.647-5.854-2.005-2.123-.418-6.85-.744-10.315-.229z" fill="url(#f)" transform="matrix(.8075 0 0 .8075 18.586 20.772)"/><path d="M124.803 89.884a4.832 4.832 0 01-5.945 3.388 4.855 4.855 0 01-3.402-5.952 4.834 4.834 0 015.947-3.39 4.854 4.854 0 013.4 5.954z" fill="#4d3623" stroke="#1f1105" strokeWidth=".40375"/><path d="M124.05 89.944c-.686 1.98-2.752 3.134-4.764 2.583-1.857-.51-3.03-2.292-2.877-4.176.69-.054 1.443-.07 2.226-.032-.008.027-.022.05-.03.078-.246.908.33 1.86 1.287 2.123.96.263 1.939-.263 2.186-1.171.03-.12.048-.238.052-.355.656.24 1.301.548 1.92.95z" fill="#5c4633"/><path d="M120.786 87.156c-.97-.278-1.961.276-2.211 1.244-.252.961.333 1.968 1.302 2.247.973.279 1.964-.276 2.215-1.239.25-.967-.335-1.973-1.306-2.252zm.211 3.418c-.403.126-.822-.042-.931-.374-.108-.331.131-.7.538-.822.406-.126.823.04.935.37.11.332-.132.7-.542.826z" opacity=".9"/><path d="M117.555 91.153c-.299.179-.745.018-1-.361-.255-.377-.218-.827.083-1.007.296-.177.748-.017 1 .36s.215.83-.083 1.008z" fill="#fff" opacity=".6"/><path d="M123.933 88.392c-.683.41-1.709.04-2.291-.824-.582-.866-.494-1.9.189-2.307.682-.411 1.71-.043 2.288.823.58.865.498 1.897-.186 2.308z" fill="#fff" opacity=".8"/><g><path d="M119.683 70.253c-8.245.287-16.842 5.628-16.703 19.167.124 12.113 9.754 18.246 17.999 17.958 8.244-.288 13.07-13.989 14.28-19.113 3.255-13.785-7.332-18.3-15.576-18.012zm2.585 22.967c-3.904.5-7.609-.211-11.461-.703-1.081-.499-1.946-1.155-1.74-1.968.005-.022.017-.043.02-.065.006-.003.012-.003.015-.007 2.296-3.595 4.997-5.863 8.7-6.411 2.797-.417 6.617-.072 8.331.266 1.463.288 3.088.56 4.725 1.538.011.852-.048 1.108-.252 1.997-.379.904-.52 4.35-8.338 5.353z" fill="#ecc4b8"/><path d="M139.703 80.234c-1.34-6.85-9.928-11.261-19.186-9.862-9.257 1.403-15.669 8.091-14.328 14.94 1.339 6.849 9.93 11.26 19.186 9.859 9.258-1.405 15.668-8.089 14.328-14.937zm-.978 2.856c-.47 1.121-.645 5.388-10.325 6.629-4.835.619-9.423-.261-14.194-.87-1.339-.618-2.41-1.43-2.154-2.438.006-.027.02-.053.025-.08.006-.004.014-.003.018-.008 2.843-4.452 6.188-7.261 10.773-7.94 3.465-.516 8.195-.089 10.318.329 1.811.357 3.727.764 5.851 1.905.013 1.055-.059 1.372-.312 2.473z" fill="url(#g)" transform="matrix(.8075 0 0 .8075 18.586 20.772)"/><path d="M138.725 83.09c.253-1.101.325-1.417.312-2.473-2.092-1.175-4.04-1.547-5.851-1.905-2.123-.418-6.854-.845-10.318-.329-4.586.679-7.931 3.488-10.773 7.94-.004.005-.012.004-.018.008-.006.027-.02.053-.025.08-.256 1.007.815 1.819 2.154 2.438 4.771.609 9.359 1.489 14.194.87 9.68-1.241 9.855-5.509 10.325-6.629z" fill="url(#h)" transform="matrix(.8075 0 0 .8075 18.586 20.772)"/><path d="M118.13 81.938c-2.661.435-5.254 1.659-7.656 3.186-.514.326-1.104.698-2.036 1.171.67-.151 1.288-.498 1.865-.816a12.437 12.437 0 00-1.6 1.885c2.035-2.551 5.892-4.472 9.172-5.127 3.15-.63 8.873-.213 13.123 1.649-3.891-2.19-9.567-2.487-12.869-1.948z" fill="#be725b"/><path d="M126.237 83.404c1.35.327 4.134 1.422 4.84 2.364.166.914-.883.042-1.132-.094-3.039-1.667-8.237-2.058-12.139-1.489-3.705.537-6.408 2.752-8.705 6.256-.868 1.273 2-10.707 17.136-7.037zm-3.972 9.695c-3.911.493-7.622-.201-11.482-.677-.915-.11 6.491 1.789 11.817 1.302 7.496-.685 8.77-4.392 8.192-6.058-.665.147.34 4.32-8.527 5.433z" fill="#131111"/></g></g><g><path d="M141 113.974c.035 22.622-18.292 40.994-40.938 41.025-22.642.037-41.028-18.273-41.063-40.9-.035-22.62 18.292-41.064 40.937-41.1 22.643-.035 41.031 18.35 41.064 40.975z" fill="url(#i)" transform="matrix(.85 0 0 .85 14.98 16.34)"/><path d="M137.5 53.999c0 20.711-16.789 37.5-37.499 37.5-20.711 0-37.501-16.789-37.501-37.5s16.79-37.5 37.501-37.5c20.71 0 37.499 16.789 37.499 37.5z" fill="url(#j)" transform="matrix(.85 0 0 .85 14.98 16.34)"/></g><g><path d="M60.88 79.401c8.46-8.478 14.246-5.028 26-2.774.718.137 5.372 1.308 4.513 2.948-.41.786-1.73.692-2.467.679-11.635-.218-17.293-8.496-28.047-.853z" fill="#3b3128"/></g><g><path d="M139.08 79.401c-8.46-8.478-14.248-5.028-26.001-2.774-.72.137-5.372 1.308-4.515 2.948.41.786 1.73.692 2.468.679 11.635-.218 17.293-8.496 28.047-.853z" fill="#3b3128"/></g><g><path d="M92.427 112.815c-.746 1.754 5.044 3.648 7.241 3.764 2.38.125 9.05-2.465 7.919-4.243-1.19-1.866-5.647-.243-7.57-.243-1.915 0-6.59-1.62-7.59.722z" fill="#dda696"/><path d="M101.558 114.14c-.196-.645 1.594-1.347 2.258-1.44.936-.136 2.856.682 2.684 1.353-.156.593-1.825-.453-2.43-.365-.624.091-2.327 1.056-2.512.452zm-5.85-.21c.822 0 2.043.53 2.267.063.268-.557-1.818-1.242-2.431-1.166-.507.059-2.323 1.117-2.073 1.563.233.409 1.152-.46 2.236-.46z" fill="#be725b"/><path d="M100.055 109.84c.516 0 1.48-.63 1.523-1.896.171-5.107-.812-20.258-1.523-20.204-.663.05-1.927 14.991-1.656 20.204.067 1.277 1.074 1.896 1.656 1.896z" fill="#fffbfa" opacity=".2"/></g><g><path d="M79.196 126.714c.191.903.06 1.24-.242 1.912.228-1.032.235-1.048.242-1.912zm19.748 22.242c-.014-.926-.323-1.415-1.145-1.698.66.466.976.887 1.145 1.698zm-2.783-.834c-.037-.795-.206-1.277-.808-1.782.411.604.588 1.017.808 1.782zm-2.886-1.01c.059.352.543 1.002.977 1.148-.36-.214-.977-1.147-.977-1.147zm-2.695-1.277c.058.184.499 1.438.61 1.278.006 0-.699-1.545-.61-1.278zm1.836-2.164c-.184.765-.22 1.216-.125 2.042.073-.474.132-1.668.125-2.042zm1.593-2.172a7.613 7.613 0 000 1.782 7.192 7.192 0 000-1.782zm.86 3.701c.484-.65.653-.986.859-1.782-.155.253-.75 1.507-.86 1.782zm2.687-1.79c-.058.98.03 1.416.368 2.165-.265-1.292-.177-.841-.368-2.164zm-1.101-1.147c.308-.627.418-.986.492-1.66-.132.337-.419 1.347-.492 1.66zm2.82-1.147c-.052.474.037 1.354.492 1.277-.345.062-.448-.925-.492-1.277zm-2.82-1.912a7.587 7.587 0 00.492-1.782 7.487 7.487 0 00-.492 1.782zm-5.141 1.407c-.213.673-.286 1.11-.242 1.912.073-.351.22-1.537.242-1.912zm-2.078 4.842c.374-.765.514-1.24.61-2.042-.17.428-.5 1.53-.61 2.042zm-1.712-1.912c-.396.459.125 1.277.125 1.277-.014-.55-.293-.818-.125-1.277zm.735-4.413c0-.046-.088.175.117 1.988.044-1.95-.125-2.24-.125-1.912.008 0 .008-.03.008-.076zm-2.82 1.606c.058 1.124.022 1.575.242 2.294-.073-1.629-.044-1.53-.242-2.294zm-1.836.13c-.132.635-.154 1.025.242 1.53-.264-.567-.242-.88-.242-1.53zm-3.055-1.66a4.916 4.916 0 00-.11-1.285c0-.069-.052.513.11 1.285zm1.263.451l.448-2.233c-.309.543-.448 2.233-.448 2.233zm2.526-2.746c-.404.398-.631 1.27-.61 1.783.081-.337.397-1.446.61-1.783zm1.961 2.173c.184-.819.22-1.3.125-2.165-.081.513-.132 1.744-.125 2.165zm-.125-6.502c-.147.498-.176.727-.125 1.278.015-.061.125-1.232.125-1.278zm-1.953 2.035c.337-.482 0-1.782 0-1.782s.095 1.552 0 1.782zm-2.696-.887c.125.635.338 1.33.61 1.912a8.255 8.255 0 00-.61-1.912zm-2.445 0c-.22 1.384-.044 1.782.242 2.547-.176-1.132-.227-1.278-.242-2.547zm-1.836-1.53c-.294.49-.397 1.652.125 2.295-.301-.59-.272-1.844-.125-2.295zm.61-3.954s-.368.719-.368 1.782c.132-.604.28-1.3.367-1.782zm2.327 1.912s-.61.046-.367 1.912c.272-2.34.367-1.912.367-1.912zm3.056.765a8.48 8.48 0 00.367-2.042 8.758 8.758 0 00-.367 2.042zm-1.47-4.72c-.337.804-.396 1.11-.366 1.913l.367-1.912zm2.938-1.269c-.492.444-.646 1.614-.61 2.295.339-2.08.61-2.295.61-2.295zm3.305.122c-.587.49-.822.842-.977 1.782.287-.726.353-.986.977-1.782zm2.086 2.042c.47-.481 1.101-2.546 1.101-2.546-.132-.268-.947 2.279-1.101 2.546zm3.672-2.546c-.411.099-1.05 2.019-1.227 2.424.22-.329 1.227-2.424 1.227-2.424zm2.32-.13c-.352.757-.543 1.154-.734 2.042.353-.727.522-1.324.735-2.042zm2.938-.383c-.558 1.308-.316.933-.977 2.295.419-.543.735-1.018.977-2.295zm21.738 2.677c-.19.903-.058 1.24.243 1.912-.228-1.032-.235-1.048-.243-1.912zm-18.242 20.399c-.823.282-1.094.52-1.102 1.445.17-.818.44-.987 1.102-1.445zm2.1-.406c-.602.505-.837 1.14-.874 1.935.22-.765.47-1.338.874-1.935zm1.087 1.553c.433-.146.925-.796.977-1.147 0 0-.617.933-.977 1.147zm3.055-1.147c.11.16.551-1.087.61-1.278.095-.267-.61 1.278-.61 1.278zm-1.101-1.408c.095-.826.058-1.277-.125-2.042 0 .382.059 1.576.125 2.042zm-1.712-2.417c.074-.589.067-1.2 0-1.782-.08.68-.066 1.27 0 1.782zm-1.71.123c.205.795.374 1.14.859 1.782-.118-.268-.713-1.522-.86-1.782zm-2.204 2.172c.338-.757.426-1.186.367-2.165-.19 1.316-.102.865-.367 2.165zm.977-4.972c.073.673.176 1.033.492 1.66-.073-.321-.36-1.33-.492-1.66zm-2.078 1.018c.448.076.543-.804.492-1.278-.052.352-.155 1.339-.492 1.278zm2.078-4.207c.08.574.257 1.216.492 1.782a7.487 7.487 0 00-.492-1.782zm5.875 5.101c.044-.803-.03-1.239-.242-1.912.022.375.169 1.56.242 1.912zm1.227.888c.095.795.242 1.277.61 2.042-.111-.513-.442-1.614-.61-2.042zm2.203 1.407s.521-.81.125-1.277c.161.459-.118.726-.125 1.277zm-.617-5.614c0-.329-.162-.038-.125 1.912.206-1.813.117-2.034.117-1.988.008.045.008.076.008.076zm2.57 3.824c.22-.719.184-1.17.243-2.294-.191.765-.162.665-.243 2.294zm1.836-.635c.397-.504.375-.894.243-1.53.007.65.029.964-.243 1.53zm3.415-4.466a4.916 4.916 0 00-.11 1.285c.162-.78.11-1.362.11-1.285zm-1.821-.505l.448 2.233s-.14-1.69-.448-2.233zm-1.469 1.277c.022-.512-.213-1.384-.61-1.782.214.329.53 1.438.61 1.782zm-2.695-1.79c-.103.865-.066 1.347.125 2.165.007-.413-.044-1.644-.125-2.165zm.367-3.059c.051-.55.022-.78-.125-1.277.008.053.118 1.224.125 1.277zm1.836-1.017s-.338 1.3 0 1.782c-.095-.23 0-1.782 0-1.782zm2.086 2.807a8.257 8.257 0 00.61-1.912 8.255 8.255 0 00-.61 1.912zm2.812.635c.294-.765.47-1.17.243-2.547-.015 1.27-.066 1.415-.243 2.547zm1.961-1.782c.522-.643.419-1.805.125-2.295.14.451.17 1.706-.125 2.295zm-.125-4.467c0-1.07-.367-1.782-.367-1.782.088.482.235 1.178.367 1.782zm-2.328 2.042c.243-1.866-.367-1.912-.367-1.912s.096-.428.367 1.912zm-3.79-3.19c.038.697.17 1.4.368 2.043a8.758 8.758 0 00-.367-2.042zm2.204-.764c.03-.803-.03-1.11-.367-1.912l.367 1.912zm-2.695-.887c.037-.681-.125-1.851-.61-2.295 0 0 .272.214.61 2.295zm-2.938-.383c-.154-.948-.389-1.3-.976-1.782.624.788.69 1.048.976 1.782zm-4.164-2.294s.632 2.065 1.102 2.546c-.154-.267-.97-2.814-1.102-2.546zm-1.344 2.416c-.176-.405-.808-2.325-1.226-2.424 0 .008 1.006 2.103 1.226 2.424zm-2.812-.504c-.191-.88-.382-1.285-.735-2.042.213.718.382 1.315.735 2.042zm-2.696-.13c-.668-1.362-.418-.987-.976-2.295.242 1.277.55 1.752.976 2.295zm-1.557 18.042c-.749 1.209-.72 1.737-.697 2.501.213-1.093.198-1.086.697-2.5zm-1.894-6.661c.374 1.086.418 1.2.602 1.98-.022-.833-.184-1.277-.602-1.98zm2.1 1.629c.184-.78.573-.543.947-1.63-.426.704-.932.804-.947 1.63z" fill="#080806"/></g><g><path d="M99.98 31.751z" fill="#2a232b"/></g><g><path d="M55.054 96.992c-1.977-7.491-3.042-14.05-4.52-20.893l.067-.016c-.56-1.436-2.58-12.799-2.599-12.921-2.06-15.102 4.075-15.963 3.95-22.264 2.583 1.347 5.093.68 7.36-1.16-2.382-1.274-1.63-1.475-4.792-3.48 2.228-.401 3.53.14 5.423.386-1.618-1.685-4.794-5.123-6.858-4.667l-.134-.301c2.987-2.428 6.975 2.627 10.57 1.258.109-13.915 19.639-16.804 24.392-18.872 6.328-2.508 12.938-8.023 17.587-8.516-2.631 2.754-4.243 7.18-4.363 10.502 3.834-3.812 4.105-3.7 9.915-10.422 0 5.408-1.438 6.087-3.305 9.261 5.068-3.458 11.387-13.163 21.119-14.646l.106.314c-3.507 2.152-6.22 5.782-8.076 10.8 1.841-2.317 4.448-4.83 7.332-5.285l.109.314c-1.808 1.126-5.348 4.88-6.159 11.165 3.575-4.158 9.262-7.604 13.166-8.906l.152.294c-3.583 3.036-5.02 8.352-5.83 12.871 2.513-3.892 3.975-4.779 7.137-6.414-1.018 1.585-.952 1.308-1.761 3.03 1.955 5.204 8.415 5.406 9.52 14.498 1.33-1.21 1.857-1.514 3.387-2.628l.23.231c-1.15 1.859-2.097 5.15-2.727 7.353 2.268-1.804 5.771-3.133 8.238-4.06l.172.278c-2.082 2.204-4.609 5.563-5.028 9.207.816-.503.855-.445 1.917-1.246 0 2.619.086 2.285.104 3.489 1.026-.956 1.183-1.09 1.857-1.854-.149 27.503-1.505 22.021-5.154 41.188-.64 3.368-1.772 9.249-2.498 12.074l-4.936.883c1.526-19.031-.076-14.883 1.034-26.858 1.642-17.659-12.08-32.134-30.213-27.396-3.668.958-18.31.957-21.978 0-20.03-5.238-27.247 6.951-29.397 28.28-1.053 10.469-1.311 6.936.218 25.974l-4.734-.845z" fill="#33291f"/><path d="M150.854 45.547c-.017-1.205-.103-.87-.103-3.489-1.063.8-1.102.743-1.918 1.246.42-3.644 2.947-7.003 5.028-9.207l-.172-.279c-2.466.928-5.969 2.256-8.238 4.06.63-2.202 1.578-5.493 2.727-7.352l-.23-.231c-1.53 1.114-2.057 1.417-3.388 2.627-1.104-9.09-7.564-9.293-9.519-14.497.81-1.722.743-1.445 1.761-3.03-3.162 1.635-4.624 2.522-7.138 6.414.81-4.52 2.249-9.835 5.832-12.871l-.153-.294c-3.904 1.302-9.59 4.748-13.165 8.906.81-6.285 4.35-10.04 6.158-11.165l-.109-.314c-2.884.455-5.49 2.969-7.332 5.285 1.855-5.018 4.57-8.648 8.077-10.8l-.107-.315c-9.732 1.484-16.051 11.188-21.12 14.647 1.868-3.174 3.306-3.854 3.306-9.261-5.81 6.721-6.081 6.61-9.915 10.422.12-3.322 1.732-7.749 4.363-10.502-4.648.493-11.258 6.007-17.587 8.516-4.752 2.067-24.282 4.956-24.39 18.871-3.596 1.37-7.584-3.685-10.571-1.257l.134.3c2.064-.456 5.24 2.982 6.858 4.668-1.892-.246-3.195-.787-5.423-.386 3.162 2.005 2.41 2.206 4.791 3.48-2.266 1.839-4.776 2.507-7.36 1.16.126 6.301-6.01 7.163-3.949 22.264.02.122 2.04 11.485 2.6 12.92l-.068.017c1.478 6.843 2.543 13.402 4.52 20.893l.022.002c-.54-13.973-8.993-33.836-4.032-46.56.647-1.662 3.15-6.043 3.15-6.043s7.856-1.074 8.226-4.25c0 0-1.632-.85-2.448-1.699 1.632.85 1.632-1.7 3.264-.85 0-1.7-2.448-.85-2.448-2.55 1.632 0 3.264 0 4.896 1.7-.816-4.249 0-8.498 3.264-11.047 8.16-6.8 18.768-5.95 26.928-12.748-.816 4.25-1.632 8.498-1.632 12.748 4.896-2.55 6.528-7.649 10.608-11.048.816 3.4-.816 7.648-.816 11.048 2.448-5.95 5.712-11.898 13.056-13.598-3.264 3.4-3.264 8.499-3.264 12.748 0-3.4 3.264-5.1 4.08-7.649v10.198c1.632-5.099 4.896-7.648 8.976-9.348-3.264 3.4-2.448 6.799-3.264 11.048 2.448-2.55 5.712-3.4 8.16-5.949 2.447 5.099.815 9.348.815 14.447.816-4.249 4.896-6.799 7.344-10.198.816 4.25.816 8.498 0 12.748.816-2.55 2.448-4.25 3.264-6.799 0 4.13-.545 7.701-1.615 11.168 1.024-1.234 2.696-1.794 3.247-3.52v10.221c.474-1.013 1.87-1.366 2.448-2.572-.696 2.9-.207 5.186-.048 7.905.303-1.666 1.843-2.687 2.4-4.221l.096-1.984c.187.775.11 1.414-.097 1.984-.744 15.102-2.116 30.182-5.105 44.725l.53-.095c.725-2.824 1.856-8.705 2.497-12.073 3.65-19.167 5.006-13.686 5.155-41.188-.674.764-.831.897-1.857 1.853z" fill="#42392f"/><path d="M155.263 33.085c-4.038.709-6.86 2.072-9.017 3.612.315-.855 1.79-5.669 3.379-7.691-2.44 1.132-3.852 2.348-4.668 2.983 0-.878-.325-1.89-.481-2.414-.155-.438-.284-.95-1.038-2.227-4.219-6.2-4.483-3.606-7.938-8.353.63-1.54 1.541-3.036 2.684-4.275-3.189.472-4.867 1.763-6.887 3.833-.032.034-.057.068-.081.102 1.265-5.206 3.745-9.72 8.617-11.414-6.026-.227-13.485 4.413-17.234 9.043 1.619-5.423 3.79-8.007 7.018-10.41-2.322-.359-4.598.63-6.398 2.192 2.073-3.737 5.155-6.713 7.63-8.1-.351-.008-.767-.033-1.224 0-.634-.168-4.47.482-5.842 1.097-6.797 2.764-11.742 9.197-13.864 11.286 1.563-2.633 1.64-4.502 1.354-7.24-.534.478-9.477 9.394-9.588 9.509.634-3.662 1.832-5.895 4.097-9.17-4.037-.787-14.143 6.134-20.408 7.98-6.564 1.852-22.852 5.714-22.106 19.291-3.505.696-8.636-5.164-11.326-.246 2.16-1.334 5.02 1.878 7.01 3.714-.816-.139-3.544-.806-4.864.11 1.546.625 2.897 2.492 4.806 3.484a.284.284 0 01.074.034c-1.746.959-3.808 1.729-5.704 1.182-.286-.085-.473-.136-.473-.145-.22-.102-.457-.204-.71-.323h-.008l-.008-.008c-.107-.06-.213-.12-.327-.179.567 4.766-6.379 8.63-5.614 18.714.314 6.204 4.038 25.076 8.72 37.873l.394.122c-1.952-7.33-3.082-14.226-4.544-20.991-.128 0-2.508-12.785-2.53-12.926-2.045-14.983 4.075-16.07 3.958-21.96 2.546 1.327 5.33.37 7.49-1.47-2.544-1.318-2.001-1.69-4.634-3.357 1.765-.318 3.919.41 5.402.51-1.915-1.994-5.14-5.532-7.328-5.048 2.911-2.367 6.933 2.78 10.632 1.24 0-13.922 19.358-16.685 24.293-18.831 5.933-2.35 13.287-8.053 17.086-8.456-1.991 2.089-4.096 6.714-4.096 10.69 3.944-3.94 4.333-3.921 9.922-10.384 0 5.11-1.833 6.023-3.616 9.322 5.234-3.142 11.57-13.45 21.616-14.982-4.205 2.58-6.883 7.075-8.494 11.872 1.919-2.6 4.732-5.55 7.858-6.042-1.64 1.021-5.599 4.914-6.3 11.838 3.546-4.346 9.454-7.943 13.44-9.272-3.758 3.185-5.197 8.814-6.03 13.785 1.376-2.187 2.739-4.162 4.871-5.558.009-.009.025-.017.033-.017.84-.594.62-.433 2.057-1.182-.546.85-.597.74-1.46 2.584 1.979 5.42 8.586 5.45 9.57 14.846 1.515-1.4 1.992-1.652 3.607-2.83-1.259 2.035-2.272 5.752-2.897 7.92 2.37-2.11 6.756-3.679 8.6-4.376-2.447 2.592-4.824 6.03-5.108 9.654.501-.35 1.138-.629 1.95-1.24 0 2.315.107 2.005.107 3.535.429-.409 1.403-1.283 1.853-1.793-.16 26.953-1.534 21.725-5.15 40.715-1.353 7.118-2.067 10.41-2.514 12.138l.35-.074c2.924-9.136 8.76-29.78 8.497-40.465-.027-3.994-.864-12.323-.906-13.173-.017.016-1.7 1.675-1.721 1.675 0-.435-.172-2.282-.172-3.29-.288.231-.893.662-1.705 1.156 1.125-3.537 2.838-5.736 6.038-9.73z" fill="#050302"/></g><g><path d="M137.266 87.155c-.053 3.955-1.805 8.124-4.054 11.46-2.188 3.243-7.888 4.398-12.103 4.398-3.442 0-6.51-.704-8.43-1.935-3.618-2.326-7.505-8.117-8.361-13.64 7.78-4.674 23.822-4.674 32.948-.283zm-74.572-.536c-.107 4.116 1.706 8.515 4.054 11.995 2.188 3.244 7.888 4.4 12.103 4.4 3.442 0 6.51-.705 8.43-1.936 3.511-2.257 7.268-7.773 8.27-13.143-8.27-4.85-24.182-5.378-32.857-1.316z" fill="#fff" opacity=".2"/><path d="M137.266 87.155c-9.126-4.384-25.168-4.391-32.94.275a14.557 14.557 0 01-.177-2.494c.169-6.311 9.196-8.552 16.876-8.552 5.416 0 11.812 1.124 13.877 3.626 1.73 2.103 2.402 4.574 2.364 7.145zM78.935 76.384c-5.416 0-11.812 1.124-13.877 3.626-1.607 1.95-2.303 4.23-2.364 6.61 8.683-4.063 24.587-3.535 32.85 1.307a13.8 13.8 0 00.26-2.99c-.17-6.312-9.196-8.553-16.87-8.553z" fill="#fff" opacity=".4"/><path d="M141.657 78.648c-.459-1.844-21.427-5.57-32.313-1.828-2.632.902-4.453 1.706-5.539 2.845v-.015c-.382.673-1.339.903-2.02.65a4.944 4.944 0 00-3.61 0c-.674.26-1.637.023-2.02-.65v.015c-1.086-1.14-2.9-1.935-5.539-2.845-10.885-3.741-31.854-.008-32.313 1.828-.176.727-.413 4.636-.398 6.036.015 1.4.887 1.293 2.196 1.905.505.237 1.56 2.042 1.66 2.784.482 3.473 1.866 6.694 4.024 9.892 3.687 5.462 16.608 6.326 22.116 2.784 3.81-2.448 7.757-8.208 8.805-13.938.206-1.14.398-2.027.543-2.792l.008.038c.275-.941 1.507-1.4 2.73-1.423 1.225.023 2.456.482 2.732 1.423l.007-.038c.138.765.337 1.652.544 2.792 1.048 5.73 4.995 11.49 8.805 13.938 5.508 3.542 18.429 2.678 22.116-2.784 2.157-3.198 3.542-6.419 4.024-9.892.1-.75 1.155-2.555 1.66-2.784 1.308-.612 2.188-.498 2.195-1.905 0-1.4-.237-5.317-.413-6.036zm-54.59 22.1c-4.88 3.137-16.845 2.326-20.005-2.348-3.595-5.34-5.982-12.959-1.713-18.146 4.115-4.995 29.789-5.6 30.072 4.69.168 6.043-4.269 13.18-8.354 15.805zm45.831-2.348c-3.16 4.682-15.124 5.485-20.005 2.349-4.085-2.624-8.522-9.762-8.354-15.805.284-10.29 25.957-9.685 30.073-4.69 4.268 5.18 1.881 12.807-1.714 18.146z" fill="#160909"/><path d="M58.188 79.474c.038-.382.077-.68.115-.834.459-1.843 21.428-5.569 32.313-1.828 2.632.903 4.453 1.706 5.54 2.846v-.016c0-.007-16.83-8.889-37.968-.168zm83.04 6.549c.513-.23.82-.536.827-1.355.015-1.392-.222-5.309-.398-6.035-.459-1.844-21.427-5.57-32.313-1.829-2.51.865-4.277 1.637-5.378 2.693 5.753-4.552 29.2-5.462 35.488.78 1.3 1.3 1.714 3.764 1.775 5.746z" fill="#251313"/></g></g></svg>
);

export default Avatar;
