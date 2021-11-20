const admin = require("../config/db");
const db = admin.firestore();

const data = [
    {
        review: "i complain about not crashes and it was i ammediately fixedgood job now the crashes have returned i really need it fixed because i need to change apps otherwise i followed your instructions on deleting the data etc but it just now crashed again i am a patient person and i have used any do for years but lets try one more ti ame and then i will have to find another app it crashed again",
        label: 0,
    },
    {
        review: "spams notifications of how many tasks other users have completed this week who on earth would care uninstalled update developer responded that this was a once off experi ament i think this was actually the third ti ame i recei haved this notification also experi amental spam is still spam",
        label: 0,
    },
    {
        review: "does not do weekly reminders correctly i opened a bug report and was told that it was a known bug a reminder app that gets reminders at the wrong ti ame is a big no from me",
        label: 0,
    },
    {
        review: "bekaar bagwas ti ame waste useless and asking for payment before use anyway",
        label: 0,
    },
    {
        review: "sorry way to complicated and why would you think i want my information out on your servers wanted to create a weekday event spent more ti ame trying to figure out how to do that than it took to write in a diary",
        label: 0,
    },
    {
        review: "useless ring bells only one ti ame and not a good reminder",
        label: 0,
    },
    {
        review: "i have the same recurring tasks to do every day i need a todolist reminder to buzz me when its ti ame the problem with this app is that those reminder ti ames somehow start drifting every day giving me different ti ames the next day that is an annoying fail screw it i am going elsewhere if i find a better app ill let you guys know update suggestion did not work and i found an app that does not drift i have moved on",
        label: 0,
    },
    {
        review: "i have been using the app for a while and since last week it has been acting weird i do not recei have reminders anymore and its completely a waste of ti ame to set reminders not very reliable right now",
        label: 0,
    },
    {
        review: "unable to register with an email clickingcontinue with email will just take you to a login page complete waste of ti ame i searched them first three pages of google for a solution and found nothing found no solution on their help section i do not want to register with facebook or google if you include a feature make sure it actually works",
        label: 0,
    },
    {
        review: "monthly fee for dark mode really i could accept a one ti ame payment for such a feature but not monthly",
        label: 0,
    },
    {
        review: "ti ame setting is so dumb fix it",
        label: 0,
    },
    {
        review: "its testing the edge of my patience even though i have better internet connection it keeps saying could not find the internet connection try again later its my first ti ame i cant sign in so i cant go in to the app and plan anything already i tried reinstall twice",
        label: 0,
    },
    {
        review: "many errors the app is good but someti ames with the recurrent task do not work when i use desktop app it do not sync well and i lose many task and this is unpleasant pay for this app with this errors is a bad idea i do no feel secure with app i lose taks and ti ame i hope the app get better and the plan my day would be good if add the tasks in someday",
        label: 0,
    },
    {
        review: "updates made it worse was using it all the ti ame and the recent updates made it all confusing and unnecessarily graphically complex sorry had to uninstall",
        label: 0,
    },
    {
        review: "app shouldnt enforce sign in for use uninstalled waste of ti ame edit that sounds like optional functionality for an app labeled to do list not a complete blocker to using the app for a si ample i need to make a quick note to remind myself of later this isnt very good",
        label: 0,
    },
    {
        review: "perhaps the least user friendly app on playstore my head is spinning why is it so hard to edit the ti ame of reminder",
        label: 0,
    },
    {
        review: "upon making a task setting ti ame and date by typing them has become absurd the app understands what it wants and acts by itself what do you mean use natural language",
        label: 0,
    },
    {
        review: "it duplicates events often with the incorrect ti ame and delete events i invite other to very aggravating",
        label: 0,
    },
    {
        review: "for an app thats meant to help me organise my ti ame more effecti havely i did not expect it would take the longest ti ame to boot up compared to all the utility apps on my device really nice ui though",
        label: 0,
    },
    {
        review: "i cannot open the app anymore",
        label: 1,
    },
    {
        review: "i have been begging for a refund from this app for over a month and nobody is replying me",
        label: 1,
    },
    {
        review: "very costly for the premium version approx indian rupees per year better to download the premium version of this app from apkmos website and use it microsoft to do list app is far more better",
        label: 1,
    },
    {
        review: "used to keep me organized but all the updates have made a mess of things y cudnt u leave well enuf alone guess ur techies feel the need to keep making changes to justify continuing to collect their salary",
        label: 1,
    },
    {
        review: "dan birthday oct",
        label: 1,
    },
    {
        review: "it has changed how i viewed my different lists now they are all jumbled together and i cant find what i need",
        label: 1,
    },
    {
        review: "i am only looking for a grocery list app but every ti ame i tap away from the app i have to tap again after opening it again to see the list i cant find a way to keep a certain list showing when i open or reopen the app eta in response to the reply it does not work like that on my phone even if the grocery list is showing when i open another app and then go back to the any do app the list of lists is showing and i have to retap to get the grocery list to show again",
        label: 1,
    },
    {
        review: "reset my free trial new phone id like to see if its better",
        label: 1,
    },
    {
        review: "how do to stop monthly payment because i do not use this app anymore",
        label: 1,
    },
    {
        review: "constant crashing after reading all the negati have reviews i uninstalled it from all my devices canceled subscription app was great until it crashed after spending more than a hour setting it up on my samsung tablet it will not run cannot even get it to start too bad in the past my experiences have been good with this app guess i will see how long it takes to crash on my cell phone so much for multidevice sync such a disappointment see above for new comment added",
        label: 1,
    },
    {
        review: "widgets are useless because they always show all tasks i have regardless of category theres no option to show only a specific category like groceries so theyre all mixed up with todo list tasks do developers even care about usability isnt it a software design",
        label: 1,
    },
    {
        review: "horrible app it does not do as described absolutely no support",
        label: 1,
    },
    {
        review: "update october new update deleted all of my tasks forced me to create an account and now only bare mini amum is free finding a new app been using this for years and loved it with each update you get less and less free it just auto updated and now i cant have reoccurring reminders without paying unless you count defaulting to every monday it wouldnt even allow me to update a long ti ame weekly reminder",
        label: 1,
    },
    {
        review: "did not realize there was a charge for this app do not want this app",
        label: 1,
    },
    {
        review: "downloaded first thing it trys to do is do a con not i ampressed",
        label: 1,
    },
    {
        review: "no longer works with alexa what happened",
        label: 1,
    },
    {
        review: "it does not show any list",
        label: 1,
    },
    {
        review: "do not download",
        label: 1,
    },
    {
        review: "this app is not what i wanted at all",
        label: 1,
    },
    {
        review: "unnecessary pop up really annoying and counterproducti have",
        label: 1,
    },
    {
        review: "they recently started sending spammy notifications every week or so please stop",
        label: 1,
    },
    {
        review: "very good app to track good habits",
        label: 2,
    },
    {
        review: "good for me",
        label: 2,
    },
    {
        review: "the tracking system is good",
        label: 2,
    },
    {
        review: "good",
        label: 2,
    },
    {
        review: "good",
        label: 2,
    },
    {
        review: "good",
        label: 2,
    },
    {
        review: "good app",
        label: 2,
    },
    {
        review: "good",
        label: 2,
    },
    {
        review: "good one to keep up the momentum",
        label: 2,
    },
    {
        review: "very good",
        label: 2,
    },
    {
        review: "very good",
        label: 2,
    },
    {
        review: "its soooo good",
        label: 2,
    },
    {
        review: "very good",
        label: 2,
    },
    {
        review: "very good",
        label: 2,
    },
    {
        review: "very good",
        label: 2,
    },
    {
        review: "a good one",
        label: 2,
    },
    {
        review: "very good",
        label: 2,
    },
    {
        review: "good",
        label: 2,
    },
    {
        review: "too good",
        label: 2,
    },
    {
        review: "good one",
        label: 2,
    },
    {
        review: "realty good",
        label: 2,
    },
    {
        review: "nice app",
        label: 3,
    },
    {
        review: "so nice",
        label: 3,
    },
    {
        review: "nice",
        label: 3,
    },
    {
        review: "very nice",
        label: 3,
    },
    {
        review: "nice",
        label: 3,
    },
    {
        review: "it is very nice app it would be good if you could add due date option for tasks",
        label: 3,
    },
    {
        review: "nice app able to manage my tasks",
        label: 3,
    },
    {
        review: "nice",
        label: 3,
    },
    {
        review: "nice app foe reminder",
        label: 3,
    },
    {
        review: "nice app very useful",
        label: 3,
    },
    {
        review: "nice",
        label: 3,
    },
    {
        review: "very nice",
        label: 3,
    },
    {
        review: "nice",
        label: 3,
    },
    {
        review: "nice app which reminds us our tasks and events",
        label: 3,
    },
    {
        review: "nice app plzz start",
        label: 3,
    },
    {
        review: "very nice",
        label: 3,
    },
    {
        review: "nice app",
        label: 3,
    },
    {
        review: "nice",
        label: 3,
    },
    {
        review: "very nice app",
        label: 3,
    },
    {
        review: "so nice",
        label: 3,
    },
    {
        review: "nice app",
        label: 3,
    },
];

//console.log(data);

// const add_data = async (data) => {
//     const review_Ref = db.collection("Reviews");
//     const res = await review_Ref.doc().set(data);
//     console.log(res);
// };

// const upload_data = async () => {
//     data.forEach(async function (obj) {
//         console.log("obj:", obj);
//         await add_data(obj);
//     });
// };

// module.exports = { upload_data };
