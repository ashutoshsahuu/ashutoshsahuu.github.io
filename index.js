const canvas = document.getElementById('noise');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawNoise() {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
        const color = Math.random() * 255;
        data[i] = color;
        data[i + 1] = color;
        data[i + 2] = color;
        data[i + 3] = 255;
    }
    ctx.putImageData(imageData, 0, 0);
    requestAnimationFrame(drawNoise);
}

drawNoise();

// Add class to animate
setTimeout(() => {
    canvas.classList.add('noise-animate');
}, 0);



document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const sidebarLinks = document.querySelectorAll('.sidebar .nav-link');

    menuToggle.addEventListener('change', function () {
        if (menuToggle.checked) {
            sidebar.classList.add('open');
        } else {
            sidebar.classList.remove('open');
        }
    });

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function () {
            sidebar.classList.remove('open');
            menuToggle.checked = false;
        });
    });
});


const techStack = [
    {
        source: "https://cdn.icon-icons.com/icons2/112/PNG/512/python_18894.png",
        name: "Python"
    },
    {
        source: "https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_logo_icon_146374.png",
        name: "React"
    },
    {
        source: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_node_icon_130301.png",
        name: "Node js"
    },
    {
        source: "https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png",
        name: "Mongo DB"
    },
    {
        source: "https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png",
        name: "Express js"
    },
    {
        source: "https://cdn.icon-icons.com/icons2/1488/PNG/512/5352-html5_102567.png",
        name: "HTML 5"
    },
    {
        source: "https://cdn.icon-icons.com/icons2/844/PNG/512/CSS3_icon-icons.com_67069.png",
        name: "CSS 3"
    },
    {
        source: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_js_official_icon_130509.png",
        name: "Java Script"
    },
    {
        source: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_typescript_icon_130108.png",
        name: "Type Script"
    },
    {
        source: 'https://user-images.githubusercontent.com/25181517/192106073-90fffafe-3562-4ff9-a37e-c77a2da0ff58.png',
        name: "C++"
    },
    {
        source: "https://cdn.icon-icons.com/icons2/2415/PNG/512/mysql_original_wordmark_logo_icon_146417.png",
        name: "MySql"
    }

]

const styling = [
    {
        source: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_tailwind_icon_130128.png",
        name: "Tailwind"
    },
    {
        source: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_sass_icon_130182.png",
        name: "Sass"
    },
    {
        source: "https://www.coffeeclass.io/logos/chakra-ui.png",
        name: "Chakra UI"
    },
    // {
    //     source: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_styled_icon_130142.png",
    //     name: "Styled Components"
    // },
    {
        source: "https://seeklogo.com/images/M/mui-logo-56F171E991-seeklogo.com.png",
        name: "Material UI"
    },
    {
        source: "https://cdn.icon-icons.com/icons2/2415/PNG/512/bootstrap_plain_logo_icon_146619.png",
        name: "Bootstrap"
    },
]

const tools = [
    {
        source: 'https://github-production-user-asset-6210df.s3.amazonaws.com/62091613/261395532-b40892ef-efb8-4b0e-a6b5-d1cfc2f3fc35.png'
        , name: "Vite"
    },
    {
        source: "https://cdn.icon-icons.com/icons2/2415/PNG/512/redux_original_logo_icon_146365.png",
        name: "Redux"
    },
    {
        source: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongoose/mongoose.png",
        name: "Mongoose"
    },
    {
        source: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_git_icon_130581.png",
        name: "Git"
    },
    {
        source: "https://cdn.icon-icons.com/icons2/2406/PNG/512/github_git_icon_145985.png",
        name: "Git Hub"
    },
    {
        source: "https://cdn.icon-icons.com/icons2/2415/PNG/512/npm_original_wordmark_logo_icon_146402.png",
        name: "NPM"
    },
    {
        source: "https://cdn.icon-icons.com/icons2/691/PNG/512/google_firebase_icon-icons.com_61475.png",
        name: "Firebase"
    },
    // {
    //     source: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_cypress_icon_130654.png",
    //     name:"Cypress Testing"
    // },
    // {
    //     source: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_jest_icon_130514.png",
    //     name:"Jest Testing"
    // },
    {
        source: "https://cdn.icon-icons.com/icons2/3053/PNG/512/postman_macos_bigsur_icon_189815.png",
        name: "Postman"
    },
    {
        source: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_netlify_icon_130354.png",
        name: "Netlify"
    },
    {
        source: 'https://cdn.icon-icons.com/icons2/836/PNG/512/Stack_Overflow_icon-icons.com_66761.png',
        name: "Stack Overflow"
    }
]

let techStackContainer = document.getElementById('techStackContainer');
let stylingContainer = document.getElementById('styleContainer');
let toolsContainer = document.getElementById('toolsContainer');

const SkillCardFuntion = (data, type) => {
    data.forEach(tech => {
        let techStackCard = document.createElement('div');
        techStackCard.classList.add('skillCard');
        let techTitle = document.createElement('p');
        techTitle.innerHTML = tech.name;
        let techImage = document.createElement('img');
        techImage.src = tech.source;

        techStackCard.append(techImage, techTitle);
        if (type === 'tech') {
            techStackContainer.appendChild(techStackCard);
        }
        else if (type === 'styling') {
            stylingContainer.appendChild(techStackCard);
        }
        else {
            toolsContainer.appendChild(techStackCard);
        }
    });
}

SkillCardFuntion(techStack, 'tech');
SkillCardFuntion(styling, 'styling');
SkillCardFuntion(tools, 'tools');


const toggleButtons = document.querySelectorAll('.toggleViewButton');

    toggleButtons.forEach(button => {
        button.addEventListener('change', function () {
            const singleProject = button.closest('.single-project');
            const laptopView = singleProject.querySelector('.laptopView');
            const mobileView = singleProject.querySelector('.mobileView');

            if (button.checked) {
                // Switch to mobile view
                laptopView.classList.add('animate__fadeOut');
                laptopView.addEventListener('animationend', function () {
                    laptopView.style.display = 'none';
                    laptopView.classList.remove('animate__fadeOut');
                    mobileView.style.display = 'block';
                    mobileView.classList.add('animate__fadeIn');
                    mobileView.addEventListener('animationend', function () {
                        mobileView.classList.remove('animate__fadeIn');
                    }, { once: true });
                }, { once: true });
            } else {
                // Switch to laptop view
                mobileView.classList.add('animate__fadeOut');
                mobileView.addEventListener('animationend', function () {
                    mobileView.style.display = 'none';
                    mobileView.classList.remove('animate__fadeOut');
                    laptopView.style.display = 'block';
                    laptopView.classList.add('animate__fadeIn');
                    laptopView.addEventListener('animationend', function () {
                        laptopView.classList.remove('animate__fadeIn');
                    }, { once: true });
                }, { once: true });
            }
        });
    });


