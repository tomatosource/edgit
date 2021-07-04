import { request } from "@octokit/request";

const token = `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`;

async function go() {
  const getResult = await request(
    "GET /repos/tomatosource/todo/contents/todo.md",
    {
      headers: {
        authorization: `token ${token}`,
      },
    }
  );
  let raw = atob(getResult.data.content);
  console.log(raw);
  raw += "yep";
  console.log(raw);
  console.log(getResult);
  const result = await request(
    "PUT /repos/tomatosource/todo/contents/todo.md",
    {
      headers: {
        authorization: `token ${token}`,
      },
      message: "update todo.md",
      content: btoa(raw),
      sha: getResult.data.sha,
    }
  );
}

go();
