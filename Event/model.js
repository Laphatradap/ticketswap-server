const db = require("../db");
const Sequelize = require("sequelize");
const Ticket = require("../Ticket/model");
// const events = require("../dummydata/events-data");

const Event = db.define("event", {
  name: Sequelize.STRING,
  description: Sequelize.STRING(511),
  start_date: Sequelize.STRING,
  end_date: Sequelize.STRING,
  imgUrl: Sequelize.STRING(511)
});

Ticket.belongsTo(Event);
Event.hasMany(Ticket);

startUpdb = async () => {
  try {
    await Event.sync({ force: false })
    await Event.bulkCreate([
      {
    name: "PTOLEMEA Release Concert",
    description: "Local female-fronted alternative rock band Ptolemea have established themselves as a vocally excellent live act with a melancholic, dreamy twist. With a powerful voice, tight grooves and grungy riffs, the outfit delivers finest rock music.",
    start_date: "2020-03-13",
    end_date: "2020-03-13",
    imgUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F82680455%2F379935459793%2F1%2Foriginal.20191126-153111?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C35%2C2160%2C1080&s=5295676d511240dfb346c8c765942ad8"
  },
  {
    name: "Sarah Jane Scouten with guests",
    description: "Three-time Canadian Folk Music Award nominee and part-time Luxembourger, Sarah Jane Scouten's music delivers a signature mix of vintage folk and country music, with modern sounds and subjects.",
    start_date: "2020-04-02",
    end_date: "2020-04-02",
    imgUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F92641479%2F30035594649%2F1%2Foriginal.20200215-140327?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C577%2C3818%2C1909&s=5b106c684f3961806d54e7b494a99e95"
  },
  {
    name: "Don't Let Daddy Know - March 6 - 2020",
    description: "We can't believe it's been seven years already! Seven years of partying with the most beautiful party people in the world. Ever since its inception on the magical island of Ibiza the Don’t Let Daddy Know events turned in so much more than just club nights on an epic scale.",
    start_date: "2020-03-06",
    end_date: "2020-03-07",
    imgUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F94050389%2F325954880399%2F1%2Foriginal.20200225-145004?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C30%2C2400%2C1200&s=661828d4bf9bacdffb379a5fdaf42c22"
  }
])
  } catch (err) {
    console.error(err)
  }
}

startUpdb()



//     // .then(() => {
//     //   // console.log("events", events.length);
//     //   Promise.all(events.map(e => Event.create(e)));
//     // })
//     // .catch(err => {
//     //   console.error(err);
//     // });
// }


// async () => {
//   await Event.sync({ force: false })
//     .then(() => {
//     console.log("events", events.length);

//     const id = Event.findByPk(1);
//     console.log("id", id);

//     if (id === null) {
//       Event.bulkCreate(events, { validate: true })
//         .then(() => {
//           console.log("created");
//         })
//         .catch(err => {
//           console.log("failed");
//           console.log(err);
//         });
//     }
//   });
// };

module.exports = Event
