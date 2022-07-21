const express = require("express");
const app = express();
const port = 3009;

const messages = {
  ru: {
    common: {
      hm: "руская раскладочка",
    },
    footer: {
      description:
        "Это не страничный компонент, требующий собственное пространство имен",
    },
  },
  en: {
    common: {
      hm: "english typing",
    },
    footer: {
      description:
        "This is a non-page component that requires its own namespace",
    },
  },
};

app.get("/locales/:lng/:ns.json", (req, res) => {
  const { lng, ns } = req.params;
  try {
    console.log(
      "loading messages for",
      lng,
      ns,
      "Messages content",
      messages[lng][ns]
    );
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    // Request methods you wish to allow
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );

    // Request headers you wish to allow
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );
    res.send(messages[lng][ns] || {});
  } catch (e) {
    console.error(e);
    res.send("oh no");
  }
});

app.get("/", (req, res) => {
  res.send("health");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
