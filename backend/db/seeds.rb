#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

#     t.string "name"
#     t.string "country"
#     t.string "password_digest"
#     t.string "username"

# User.create(name: "Jon Snow", country: "England", password: "Kat", username: "Kit")

Castle.create([
    {
        name: "Glamis Castle",
        image_url: "https://images.app.goo.gl/GPwGhrsSQP6Tq7aT6",
        location: "Angus, Scotland, UK",
        short_description: "Built in 1372, a simple L-plan tower house, ancestral seat to the Earls of Strathmore and Kinghorne. Once the inspiration for Shakespeare's Macbeth and childhood home of Queen Elizabeth II.",
        hours_of_operation: "Open Daily 10:00 ~ 17:00, currently closed until 18th March 2023",
        website: "https://www.glamis-castle.co.uk"
    },
    {
        name: "Dunnottar Castle",
        image_url: "",
        location: "Stonehaven, Scotland, UK",
        short_description: "The keep was built around 1392, a ruined medieval fortress perched atop a 160 foot rock surrounded on three sides by the North Sea. Steeped in history.",
        hours_of_operation: "Open Daily 10:00 ~ 16:00",
        website: "https://www.dunnottarcastle.co.uk"
    },
    {
        name: "Stirling Castle",
        image_url: "",
        location: "Stirling, Scotland, UK",
        short_description: "Castle dates from early 12th century. Key to the kingdom of Scotland, with famous battles such as Stirling Bridge and Bannockburn within sight of its walls. Childhood home to Mary Queen of Scots, James VI and I.",
        hours_of_operation: "Open Daily 9:30 ~ 17:00",
        website: "https://www.stirlingcastle.scot"
    },
    {
        name: "Cawdor Castle",
        image_url: "",
        location: "Nairn, Scotland, UK",
        short_description: "An ancient medieval tower constructed around the legendary holly tree in the 15th century. Now home to the Dowager Countess Cawdor, best known for it's connection to Shakespeare's Macbeth, Thane of Cawdor",
        hours_of_operation: "Saturday 29th April until Sunday 1st October, daily 10:00 ~ 17:30",
        website: "https://www.cawdorcastle.com"
    }
])