const client = require("../config/dbconfig");

exports.upgradeUser = () => {
  const options = {
    // Schema is not passed here since it has been passed while creating client
    table: "premium",
    records: [
      {
        username: req.body.username,
      },
    ],
  };
  try {
    const response = await client.insert(options);
    res.send(response);
  } catch (error) {
    res.status(500).send(error);
  }
};
