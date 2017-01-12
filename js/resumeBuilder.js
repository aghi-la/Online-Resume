var bio = {
    "name": "Aghila Vijayakumar",
    "role": "Front End Web Developer",
    "contacts": {
        "mobile": "9645******",
        "email": "aghilakrishna.3010@gmail.com",
        "github": "aghi-la",
        "twitter": "aghi_la",
        "location": "Kerala,India"
    },
    "welcomeMessage": "hello everyone! :)",
    "skills": ["Computer programming", "Testing", "Leadership Quality", "Problem solving"],
    "biopic": "images/bio.jpg"
};

var education = {
    "schools": [{
        "name": "SSET",
        "location": "Karukutty,Kerala",
        "degree": "B.Tech",
        "dates": "2016",
        "url": "www.sset.com",
        "majors": ["ECE"]
    }],
    "onlineCourses": [{
        "title": "Front-end web developer nanodegree programming",
        "school": "Udacity",
        "dates": "2016",
        "url": "http://www.udacity.com"
    }]
};

var projects = {
    "projects": [{
        "title": "Mockup article",
        "dates": "2016",
        "description": "The first project of nanodegree program.",
        "images": ["images/mockup.jpg", "images/mockup2.jpg"]
    }, {
        "title": "Animal trading cards",
        "dates": "2016",
        "description": "Animal Trading cards is the second project.",
        "images": ["images/panda.jpg", "images/cards.jpg"]
    }, {
        "title": "Portfolio",
        "dates": "2016",
        "description": "My Portfolio is the third project.",
        "images": ["images/myportfolio.jpg", "images/technology.jpg"]
    }]
};

var work = {
    "jobs": [{
        "employer": "Infosys",
        "title": "Web developer",
        "location": "Mysore",
        "dates": "2016",
        "description": "udacity front-end developer nano degree programmer"
    }]
};

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").append(formattedName);
    $("#header").append(formattedRole);
    $("#header").append(formattedPic);
    $("#header").append(formattedWelcome);

    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedLocation);

    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedLocation);

    $("#header").append(HTMLskillsStart);
    for (var skill = 0; skill < bio.skills.length; skill++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill);
    }

};
bio.display();

work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        $(".work-entry:last").append(formattedEmployer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        $(".work-entry:last").append(formattedTitle);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};
work.display();

projects.display = function() {
    for (var project = 0; project < projects.projects.length; project++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        // var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
        // $(".project-entry:last").append(formattedImage);
        if (projects.projects[project].images.length > 0) {
            for (var image = 0; image < projects.projects[project].images.length; image++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};
projects.display();

education.display = function() {
    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);
        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedschoolNameDegree = formattedschoolName + formattedschoolDegree;
        $(".education-entry:last").append(formattedschoolNameDegree);
        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        $(".education-entry:last").append(formattedschoolDates);
        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(formattedschoolLocation);
        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        $(".education-entry:last").append(formattedschoolMajor);
        var formattedschoolURL = HTMLschoolURL.replace("%data%", education.schools[i].url);
        $(".education-entry:last").append(formattedschoolURL);
    }
    $(".education-entry:last").append(HTMLonlineClasses);
    for (var j = 0; j < education.onlineCourses.length; j++) {
        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
        var formattedonlineTitleSchool = formattedonlineTitle + formattedonlineSchool;
        $(".education-entry:last").append(formattedonlineTitleSchool);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
        $(".education-entry:last").append(formattedonlineDates);
        var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url);
        $(".education-entry:last").append(formattedonlineURL);
    }
};
education.display();

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);