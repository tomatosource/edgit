import { request } from "@octokit/request";

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

  const textAreaEle = document.getElementById(
    "textarea"
  ) as HTMLTextAreaElement;
  textAreaEle.textContent = raw;

  let lastSaved = raw;
  setInterval(async () => {
    const newVal = textAreaEle.value;
    console.log(newVal);
    if (newVal != lastSaved) {
      console.log("saving");
      await request("PUT /repos/tomatosource/todo/contents/todo.md", {
        headers: {
          authorization: `token ${token}`,
        },
        message: "update todo.md",
        content: btoa(raw),
        sha: getResult.data.sha,
      });
      lastSaved = newVal;
    }
  }, 5000);
}

go();
