import { request } from "https://cdn.skypack.dev/@octokit/request";

const tokenKey = "token_storage_key";

async function go() {
  let token = localStorage.getItem(tokenKey);
  if (!token) {
    token = window.prompt("token pls");
    localStorage.setItem(tokenKey, token);
  }
  const getResult = await request(
    "GET /repos/tomatosource/todo/contents/todo.md",
    {
      headers: {
        authorization: `token ${token}`,
      },
    }
  );
  let raw = atob(getResult.data.content);

  const textAreaEle = document.getElementById("textarea");
  textAreaEle.textContent = raw;

  let lastSaved = raw;
  setInterval(async () => {
    const newVal = textAreaEle.value;
    if (newVal != lastSaved) {
      await request("PUT /repos/tomatosource/todo/contents/todo.md", {
        headers: {
          authorization: `token ${token}`,
        },
        message: "update todo.md",
        content: btoa(newVal),
        sha: getResult.data.sha,
      });
      lastSaved = newVal;
    }
  }, 5000);
}

go();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}
