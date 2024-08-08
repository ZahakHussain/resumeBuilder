const dynamicResume = (options, theme) => {
    return `
        <!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    
    <title>Resume Maker</title>
    <style>
        .resume{
            width: 6.1in;
            height:7.86in;

        }

        .box{
            background-color: $(themeOptions.wholeBodyColor);
            width: 100%;
            height: 100%;
        }

        .left-side{
            color: $(themeOptions.leftTextColor);
            width: 33%;
            height: 100%;
            background-color: $(themeOptions.leftBackgroundColor);
        }

        .right-side{
            height: 100%;
            width: 65%;
            color: $(themeOptions.rightTextColor);
        }

        .name{
            font-size: 1.2rem;

        }

        .profile-image{
            width: 90%;
            margin-left: 5%;
            margin-top: 3%;

        }

        .profile-image img{
            border-radius: 100%;
        }

        .heading-text{
            font-size: 0.9rem;
        }

        .para, .per-info{
            font-size: 0.7rem !important;
        } 

        .about .para {
            width: 93%;
        }

        .key-skills li{
            font-size: 0.7rem;
        }

    </style>

</head>

<body>
    <div class="resume border shadow d-flex align-items-center justify-content-center">

        <div class="box">

            <div class="left-side d-inline-block">
                <div class="profile-image">
                    <img class="img-fluid" src="images.jpg" alt="">
                </div>
                <div class="contact ml-2 mt-2">
                    <div class="heading-text text-uppercase">Contact</div>
                    <p class="para mb-1">
                        H.No: 70-1 Dhaka, Bangla <br>
                        
                        www.website.com
                    </p>
                </div>
                <div class="expert ml-2 mt-2">
                    <div class="heading-text upper-case">Expertise Area</div>
                    <p class="para mb-1">
                        ${options.exp_1} <br>
                        ${options.exp_2} <br>
                        ${options.exp_3} <br>
                        App Development <br>
                        UI/UX
                    </p>
                </div>

                <div class="skill ml-2 mt-2">
                    <div class="heading-text upper-case">IT Skill</div>
                    <p class="para mb-1">
                    ${options.skill}

                    </p>
                </div>

                <div class="skill ml-2 mt-2">
                    <div class="heading-text upper-case">hobbies</div>
                    <p class="para mb-1">
                        sports <br>
                        meditation
                    </p>
                </div>

            </div>

            <div class="right-side d-inline-block m-0 p-0 align-top">
                <h2 class="name text-uppercase ml-3 my-2">${options.name}</h2>

                <div class="contact ml-3 mt-3">
                    <div class="heading-text text-uppercase">About Me</div>
                    <p class="para mb-1">
                    ${options.about}
                    </p>
                </div>

                <div class="personal ml-3 mt-3">
                    <div class="heading-text text-uppercase">Personal Information</div>
                    <table class="per-info">
                        <tbody>
                            <tr class="border">
                                <td>Father's Name</td>
                                <td>${options.f_name}</td>
                            </tr>
                            <tr class="border">
                                <td>Mother's Name</td>
                                <td>${options.m_name}</td>
                            </tr>
                            <tr class="border">
                                <td>DOB</td>
                                <td>${options.birth}</td>
                            </tr>
                            <tr class="border">
                                <td>NIC</td>
                                <td>42101-5465987-0</td>
                            </tr>
                            <tr class="border">
                                <td>Address</td>
                                <td>Mumbai</td>
                            </tr>
                            <tr class="border">
                                <td>Street</td>
                                <td>Utar Pardesh</td>
                            </tr>
                            <tr class="border">
                                <td>State</td>
                                <td>South</td>
                            </tr>
                        </tbody>

                    </table>
                </div>

                <div class="education ml-3 mt-3">
                    <div class="heading-text text-uppercase">Educational Information</div>
                    <table class="per-info">
                        <tbody>
                            <tr class="border">
                                <td>BS</td>
                                <td>Software Engineering</td>
                            </tr>
                            <tr class="border">
                                <td>Intermediate</td>
                                <td>Pre-Engineering</td>
                            </tr>
                            <tr class="border">
                                <td>Matric</td>
                                <td>Computer Science</td>
                            </tr>
                            <tr class="border">
                                <td>Street</td>
                                <td>Utar Pardesh</td>
                            </tr>
                            <tr class="border">
                                <td>State</td>
                                <td>South</td>
                            </tr>
                        </tbody>

                    </table>
                </div>
                
                <div class="key-skills ml-3 mt-3">
                    <div class="heading-text text-uppercase">Key SKills</div>
                    <div class="ul pl-1">
                        <li>trouble shooting, problem solving, team working, learning & advancing</li>
                        <li>trouble shooting, problem solving, team working, learning & advancing</li>
                        <li>trouble shooting, problem solving, team working, learning & advancing</li>
                        <li>trouble shooting, problem solving, team working, learning & advancing</li>
                        <li>trouble shooting, problem solving, team working, learning & advancing</li>
                    </div>
                </div>

            </div>

        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
</body>

</html>    
    `;
}

module.exports = dynamicResume;