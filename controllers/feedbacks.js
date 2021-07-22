const client = require("../config/dbconfig");

exports.sendFeedback = async (req, res) => {
  const options = {
    // Schema is not passed here since it has been passed while creating client
    table: "feedbacks",
    records: [
      {
        username: req.body.username,
        feedback: req.body.feedback,
        smiley: req.body.smiley,
      },
    ],
  };
  try {
    const { data } = await client.searchByValue({
      table: "feedbacks",
      searchAttribute: "username",
      searchValue: [req.body.username],
      attributes: ["feedback"],
    });

    if (data.length >= 5) {
      res.status(200).send("full");
    } else {
      const response = await client.insert(options);
      // Return response to the registration function
      res.send(response);
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

exports.retrieveFeedBack = async (req, res) => {
  try {
    const userFeedback = await client.searchByValue({
      table: "feedbacks",
      searchAttribute: "username",
      searchValue: [req.body.username],
      attributes: ["*"],
    });
    res.send(userFeedback);
  } catch (error) {
    res.status(401).send({ errorMessageToken: error });
  }
};

exports.deleteFeedback = (req, res) => {
  try {
    const response = client.delete({
      table: "feedbacks",
      hashValues: [req.body.id],
    });
    res.send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};
