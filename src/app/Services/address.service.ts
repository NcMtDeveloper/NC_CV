import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor() { }

  public isDesktop: boolean = true;

  logos = [
    { Type: "front", name: "angular", address: "/assets/logo/angular.png", website: "https://angular.io/" },
    { Type: "back", name: "aspNet", address: "/assets/logo/aspNet.png", website: "https://dotnet.microsoft.com/en-us/apps/aspnet" },
    { Type: "front", name: "worpress", address: "/assets/logo/WordPress.png", website: "https://wordpress.org/" },
    { Type: "back", name: "csharp", address: "/assets/logo/csharp.png", website: "https://docs.microsoft.com/en-us/dotnet/csharp/" },
    { Type: "back", name: "jwt", address: "/assets/logo/jwt.png", website: "https://jwt.io" },
    { Type: "front", name: "html", address: "/assets/logo/html.png", website: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { Type: "front", name: "css", address: "/assets/logo/css.png", website: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { Type: "front", name: "js", address: "/assets/logo/js.png", website: "https://www.javascript.com/" },
    { Type: "front", name: "bootstrap", address: "/assets/logo/bootstrap.png", website: "https://getbootstrap.com/" },
    { Type: "front", name: "tailwind", address: "/assets/logo/tailwind.png", website: "https://tailwindcss.com" },
    { Type: "front", name: "jquery", address: "/assets/logo/jquery.png", website: "https://jquery.com/" },
    { Type: "", name: "Unity", address: "/assets/logo/unity.png", website: "https://unity.com/" },
    { Type: "", name: "Jira", address: "/assets/logo/jira.png", website: "https://www.atlassian.com/software/jira" },
    { Type: "", name: "clickup", address: "/assets/logo/clickup.png", website: "https://clickup.com/" },
    { Type: "", name: "git", address: "/assets/logo/git.png", website: "https://git-scm.com/" },
    { Type: "", name: "tfs", address: "/assets/logo/tfs.png", website: "https://docs.microsoft.com/en-us/azure/devops/server/tfs-is-now-azure-devops-server?view=azure-devops" },
    { Type: "", name: "github", address: "/assets/logo/github.png", website: "https://github.com/" },
    { Type: "", name: "gitlab", address: "/assets/logo/gitlab.png", website: "https://gitlab.com/" },
    { Type: "", name: "devops", address: "/assets/logo/devops.png", website: "https://azure.microsoft.com/en-us/services/devops/" },
    { Type: "back", name: "sql", address: "/assets/logo/sql.png", website: "https://www.microsoft.com/en-us/sql-server/sql-server-downloads" },
    { Type: "", name: "Artstation", address: "/assets/logo/Artstation.png", website: "https://www.artstation.com/" },
    { Type: "", name: "behance", address: "/assets/logo/behance.png", website: "https://www.behance.net/" },
    { Type: "", name: "Envato", address: "/assets/logo/Envato.png", website: "https://www.Envato.com/" },
    { Type: "", name: "deviantArt", address: "/assets/logo/DeviantArt.png", website: "https://www.deviantart.com/" },
    { Type: "", name: "figma", address: "/assets/logo/figma.png", website: "https://www.figma.com/" },
    { Type: "", name: "flaticon", address: "/assets/logo/flaticon.png", website: "https://www.flaticon.com/" },
    { Type: "", name: "fontAwesome", address: "/assets/logo/fontAwesome.png", website: "https://fontawesome.com/" },
    { Type: "", name: "freepik", address: "/assets/logo/freepik.png", website: "https://www.freepik.com/" },
    { Type: "", name: "pinterest", address: "/assets/logo/pinterest.png", website: "https://www.pinterest.com/" },
    { Type: "", name: "dribble", address: "/assets/logo/dribble.png", website: "https://dribbble.com/" },
    { Type: "", name: "codeProject", address: "/assets/logo/codeproject.png", website: "https://www.codeproject.com/" },
    { Type: "", name: "codePen", address: "/assets/logo/codepen.png", website: "https://codepen.io/" },
    { Type: "", name: "csharpCorner", address: "/assets/logo/csharpCorner.png", website: "https://www.c-sharpcorner.com/" },
    { Type: "", name: "google", address: "/assets/logo/google.png", website: "https://google.com" },
    { Type: "", name: "chrome", address: "/assets/logo/chrome.png", website: "https://www.google.com/chrome/" },
    { Type: "", name: "ubuntu", address: "/assets/logo/ubuntu.png", website: "https://ubuntu.com" },
    { Type: "", name: "Android", address: "/assets/logo/Android.png", website: "https://Android.com" },
    { Type: "", name: "microsoft", address: "/assets/logo/microsoft.png", website: "https://www.microsoft.com/" },
    { Type: "back", name: "ssms", address: "/assets/logo/ssms.png", website: "https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms" },
    { Type: "", name: "analystics", address: "/assets/logo/analystics.png", website: "https://analytics.google.com" },
    { Type: "", name: "googleFont", address: "/assets/logo/googleFont.png", website: "https://fonts.google.com/" },
    { Type: "", name: "photoshop", address: "/assets/logo/photoshop.png", website: "https://www.adobe.com/products/photoshop.html" },
    { Type: "", name: "illustrator", address: "/assets/logo/illustrator.png", website: "https://www.adobe.com/products/illustrator.html" },
    { Type: "", name: "mdn", address: "/assets/logo/mdn.png", website: "https://developer.mozilla.org/" },
    { Type: "", name: "quora", address: "/assets/logo/quora.png", website: "https://ww, websitew.quora.com/" },
    { Type: "", name: "reddit", address: "/assets/logo/reddit.png", website: "https://www.reddit.com/" },
    { Type: "", name: "StackOverflow", address: "/assets/logo/StackOverflow.png", website: "https://stackoverflow.com/" },
    { Type: "", name: "w3school", address: "/assets/logo/w3school.png", website: "https://www.w3schools.com/" },
    { Type: "", name: "johnsHopkins", address: "/assets/logo/Hopkins.png", website: "https://www.jhu.edu/" },
    { Type: "", name: "coursera", address: "/assets/logo/Coursera.png", website: "https://www.coursera.org/" },
    { Type: "", name: "udemy", address: "/assets/logo/udemy.png", website: "https://www.udemy.com/" },
    { Type: "", name: "ibm", address: "/assets/logo/IBM.png", website: "https://www.ibm.com/" },
    { Type: "", name: "vs", address: "/assets/logo/vs.png", website: "https://visualstudio.microsoft.com/" },
    { Type: "", name: "vscode", address: "/assets/logo/vscode.png", website: "https://code.visualstudio.com/" },
    { Type: "", name: "jetBrains", address: "/assets/logo/jetBrains.png", website: "https://www.jetbrains.com/" },
    { Type: "", name: "youtube", address: "/assets/logo/youtube.png", website: "https://youtube.com" },
    { Type: "", name: "Discord", address: "/assets/logo/discord.png", website: "https://www.discord.com/" },
    { Type: "", name: "soundCloud", address: "/assets/logo/soundCloud.png", website: "https://soundcloud.com/" },
    { Type: "", name: "youtubeMusic", address: "/assets/logo/youtubeMusic.png", website: "https://music.youtube.com/" },
    { Type: "", name: "spotify", address: "/assets/logo/spotify.png", website: "https://www.spotify.com/" },
    { Type: "", name: "playstation", address: "/assets/logo/playstation.png", website: "https://www.playstation.com/en-us/" },
    { Type: "", name: "minecraft", address: "/assets/logo/minecraft.png", website: "https://www.minecraft.net/" },
    { Type: "", name: "steam", address: "/assets/logo/steam.png", website: "https://store.steampowered.com/" },
  ]
  frontEndAbilities = [
    { name: 'Angular', status: 'Experimenting', percent: '75%' },
    { name: 'HTML', status: 'Completing', percent: '90%' },
    { name: 'CSS', status: 'Completing', percent: '90%' },
    { name: 'JavaScript', status: 'Completing', percent: '70%' },
    { name: 'Bootstrap', status: 'Completing', percent: '80%' },
    { name: 'Sass', status: 'Learning', percent: '25%' },
    { name: 'Tailwind', status: 'Learning', percent: '10%' },
    // { name: 'ThreeJS', status: 'Pending', percent: '0%' }
  ]
  backEndAbilities = [
    { name: 'C#', status: 'Experimenting', percent: '75%' },
    { name: 'Vb.net', status: 'Experimenting', percent: '60%' },
    { name: 'WindowsForm', status: 'Completing', percent: '90%' },
    { name: 'Asp.net (mvc, core)', status: 'Experimenting', percent: '70%' },
    { name: 'Api', status: 'Experimenting', percent: '60%' },
    { name: 'Security', status: 'Learning', percent: '25%' },
    { name: 'JWT (token-based auth)', status: 'Learning', percent: '25%' },
    { name: 'Microservice', status: 'Learning', percent: '50%' }
  ]
  SQLAbilities = [
    { name: 'Design and implementation', status: 'Completing', percent: '75%' },
    { name: 'Querying', status: 'Completing', percent: '87%' },
    { name: 'Maintenance', status: 'Completing', percent: '95%' },
    { name: 'Security', status: 'Completing', percent: '90%' },
    { name: 'T-SQL programming', status: 'Learning', percent: '50%' },
    // { name: 'DB Administration', status: 'pending', percent: '0%' }
  ]

  bioPerTitle = [
    { author: 'نویسنده:', authorVal: 'امیرحسین مردانی' },
    { Location: 'مکان:', LocationVal: 'ایران، تهران' },
    { modified: 'آخرین بازنگری:', modifiedVal: 'اردیبهشت/1401' },
  ]
  BioPer = [
    { part: 1, img: [], text: "از دوستی آموختم که هر شخص، حتی اون اشخاصی که در نظر شما کم اهمیت و ساده جلوه می کنند هم، شخصیت اول زندگی خودشون هستند و قهرمان قصه ی چند ساله ی خودشون! به همین دلیل فکر میکنم در درون هر شخص داستانی جالب نهفته ست و فقط کافیه بهش توجه کنیم. مسلما برای هر شخص، عوامل مختلفی هست که باعث میشه زندگیش دستخوش تغییرات بشه و مسیر جدیدی پیدا کنه؛ بعضی ها با یک حادثه، یک تصادف، یک اتفاق ساده یا پیچیده؛ و من با رمان نویسی! ", },
    { part: 2, img: ["/assets/img/FrontCoverEternal.jpg", "/assets/img/BackCoverEternal.png", "/assets/img/FrontCoverRevenge.png", "/assets/img/BackCoverRevenge.png"], text: "به خاطر دارم دوران کودکی، که زمانم رو در کتابخونه ی محله صرف می کردم؛ نه بخاطر اینکه از طوران طفولیت فرهیخته بودم! نه! شاید چون ذاتا درونگرا بودم و (هنوزم) هستم، بهترین دوست خودم رو کتاب برگزیدم؛ شاید هم واقعا فرهیخته بودم! نه خودم این طور فکر نمیکنم. ", },
    { part: 3, img: [], text: "دوره ی کودکی تا حدود دوازده سیزده سالگی با مطالعه ی کتاب های مناسب سن خودم گذشت؛ رمان های خیالی بچه گانه، داستان های فانتزی، افسانه های پارسی و امثال اینها. هنوز به خاطر دارم مجموعه ی 'در جست و جوی دلتورا'، که چندین بار خوندم؛ که هر دفعه موفق نشدم جلد چهارم رو توی کتابخونه پیدا کنم! ", },
    { part: 4, img: [], text: 'انتهای دوره متوسطه مصادف بود با مطالعه ی داستان هایی مثل آشیانه افسانه یا دنیای خالی از قهرمان که منو به این فکر فرو می بردند: آیا میشه ادامه این داستان ها رو نوشت؟ خب، تلاش کردم تا صفحاتی با قلم خودم بنویسم. در دنیای کتاب به چنین داستان هایی خیالات طرفدار (<span class="cv-eng">Fan fiction</span>) گفته میشه. حرکت اشتباهی نبود؛ بسیاری از کتاب های معروف، چنین کتاب هایی در ادامه خود دارند، مثل هری پاتر که هشتصد و سی و چهار هزار فن فیکشن ثبت شده دارد! به هر حال، هر قدر هم این عمل مرسوم باشد، استفاده از پتانسیل های دنیای یک شخص برای خیالات خود، راضی کننده به نظر نمی رسید. به همین دلیل، قصه ی خودم رو استارت زدم. ', },
    { part: 5, img: ["/assets/img/hexagon.png"], text: 'سال اول دبیرستان، همزمان با محیط جدید، اساتید جدید و دروس جدید، اولین کتاب خودمو نوشتم؛ اولین جلد از یک مجموعه ای که قرار بود هفت جلدی باشد؛ <span class="cv-red">Cavalry</span>. ', },
    { part: 6, img: [], text: "مجموعه ی هفت جلدی سواره نظام، بر خلاف اسمش، داستان بچه های دبیرستانی ای بود که ناخواسته درگیر مافیا و مبارزه علیه آنها می شوند. در جلد اول، بچه ها مبارزه را به پایان می رسانند و مافیا را سرکوب می کنند. به واسطه ی همین کار، پای آنها به چهره ی دیگر دنیا باز می شوند و کنکور را به مقصد آموزش های سرویس ضد جاسوسی رها می کنند. ", },
    { part: 7, img: [], text: "تا پایان دوره ی دبیرستان، سه جلد از کتاب تقریبا تمام شده بود. همان دوره بود که در وب سایت های داخلی و خارجی در جست و جوی وب سایت های تولید کننده وبلاگ و وب سایت بودم. موارد داخلی و خارجی هر لحظه جذاب تر و جذاب تر می شدند اما نمی توانستند رضایت مرا کسب کنند. هر لحظه با خودم می گفتم: صفحه ای باید وجود داشته باشه تا کتاب های من با سلیقه ی خودم، رنگ و تصویر و ترکیب مد نظر خودم، به نمایش در بیاد. اما خب نتیجه ای نگرفتم. تنها نتیجه، ناراحتی درونی بود، که چرا بلد نیستم خودم بسازم؟ ", },
    { part: 8, img: ["/assets/img/Guard.png", "/assets/img/REVENGE.png", "/assets/img/FALL.png", "/assets/img/RAISE.png"], text: "کنکور فرا رسید و رمان نویسی به کناری رفت و دانشگاه پذیرفته شدیم و دو ترم اول به گونه ای گذشت که کتاب فراموش شد؛ تنها خاطره ای از اینکه چقدر در میان کتاب ها وقت گذراندم و چه دوران خوبی بود. برای من باعث افتخار بود (و هست) که اهل کتاب بودم. ولی خب هر چه که بود، کرم کتاب رفته بود.  ", },
    { part: 9, img: [], text: "اولین تابستان دانشگاه بود که به پیشنهاد دوستی عزیز، دوره ی آموزش طراحی وب در دانشگاه تهران ثبت نام کردم. دوره ی خوبی بود. آغازی برای یک دوره ی بی پایان: برنامه نویسی. ", },
    { part: 10, img: [], text: 'از اون دوره، زمان زیادی گذشته. به کارم ادامه دادم، با دوره مقدماتی شبکه دیدم و باز تر کردم، با فراگیری پایگاه داده <span class="cv-eng">SQL</span> به خودم افتخار کردم، با اضافه شدن دات نت به کتابخانه ی مغزم پیشرفت رو حس کردم و با رسیدن به انگولار راهم رو برای <span class="cv-eng">FullStack Developer</span> شدن باز کردم.  ', },
    { part: 11, img: [], text: "هیچ وقت فراموش نکردم چی باعث شد به این نقطه برسم. تمام این مدت، با خودم تکرار می کنم. شیرین ترین حادثه ی تصادفی ای که می توانست برای سرنوشت یک انسان بیفتد، برای من افتاده بود؛ حادثه ی کتاب. ", },
    { part: 12, img: [], text: 'به همین دلیل <span class="cv-red">I.L.E.C.Y.</span>، امضای کارهام، و شعار زندگیم شد (بخونیم ایل&#160;سی!)؛ مخفف من عاشق سواره نظام هستم <span class="cv-ilecy">(<span class="cv-red">I</span> <span class="cv-red">L</span>ov<span class="cv-red">E</span> <span class="cv-red">C</span>avalr<span class="cv-red">Y</span>)</span>. ایلسی، شعار من، زندگینامه من، و دلیل وجود من در این عرصه است. ' },
  ]
  bioEngTitle = [
    { author: 'Author:', authorVal: 'Amirhosein Mardani' },
    { Location: 'Location:', LocationVal: 'Iran, Tehran' },
    { modified: 'Latest modified:', modifiedVal: 'May, 2022' },
  ]
  BioEng = [
    { part: 1, img: [], text: "I learned from a friend that every single body, even people you find simple or naive, are a lead actor for their life and a hero for their years-old life story. That`s why I think we can find interesting stories in everybody`s life. Absolutely, there are different factors causing changes in everyone`s life path; An accident, an event, simple or complicated; mine was novel! " },
    { part: 2, img: ["/assets/img/FrontCoverEternal.jpg", "/assets/img/BackCoverEternal.png", "/assets/img/FrontCoverRevenge.png", "/assets/img/BackCoverRevenge.png"], text: "I remember my childhood; I spent my time in our local library. Not because I was an educated child! No! Maybe because I was an introvert, I chose books as my best friend; Or maybe I WAS educated! No, personally I don`t think so! " },
    { part: 3, img: [], text: "Childhood finished with books that were suitable for my age: Childish fiction novels, fantasy novels, old-Persian fiction, and so on. Still, I can remember the Deltora quest collection I read multiple times; each time I couldn`t find the fourth book there! " },
    { part: 4, img: [], text: 'The end of this period coincided with reading good books such as the Fable Heaven and the Beyonders which made me think: Can I continue writing the story by myself? So, I tried. In the world of books, this method is called Fan-fiction. Not a mistake, nor fault; Very famous books have Fan-fiction(s)  such as harry potter that have eight hundred and thirty-four thousand fan-fiction books! Anyway, no matter how good it is, using the potential of the world of another book, seems inappropriate for me. So, I started my own book. ' },
    { part: 5, img: ["/assets/img/hexagon.png"], text: 'In the first year of high school, I wrote my book alongside the new school, new teachers, and new lessons; the First book of a seven-book collection: The <span class="cv-red">Cavalry</span>. ' },
    { part: 6, img: [], text: 'This seven-book collection, the <span class="cv-red">Cavalry</span>, unlike his name, was the tale of teenagers that get involved with the mafia and fight against them. In the first book, they end the fight and suppress the mafia. Due to this success, they leave the entrance exam to the national security service. ' },
    { part: 7, img: [], text: "Until the end of high school, three books in the collection were almost completed. That was the time I was searching between website and weblog builders platforms, finding something that made me satisfied. Every time items became better and better but there was no satisfaction. 'It has to be a page with my style, my combination of colors and pictures' said myself. I was upset because I couldn`t make that thing. I had any literacy of that; no knowledge. " },
    { part: 8, img: ["/assets/img/Guard.png", "/assets/img/REVENGE.png", "/assets/img/FALL.png", "/assets/img/RAISE.png"], text: "The entrance exam came to the front yard and reading and writing were forgotten. I was accepted to university and the first couple of terms was spent without any book; only memories of how cool this little friend is. I was proud of having this friend in my hand. But for that time, bookworm was no more. " },
    { part: 9, img: [], text: "It was the first summer when a dear friend recommended me to register in course of Web design at Tehran University. It was a cool course; An start for an endless journey: Developing. " },
    { part: 10, img: [], text: "Now, those days are gone. I continued the journey; I expanded my visions with Network plus, and was proud of myself with the SQL server. After adding .NET to my brain`s library, I sensed the improvements and with angular, I opened the way to becoming Full stack developer. " },
    { part: 11, img: [], text: "I never forgot what caused all this to happen. All the time, I repeat. The sweetest chain of events that I couldn`t imagine. Sweet chain event, starting of book. " },
    { part: 12, img: [], text: 'And that`s the reason for <span class="cv-red">I.L.E.C.Y.</span>; my sign and my emblem. I seriously LOVE <span class="cv-red">Cavalry</span>. <span class="cv-ilecy"> <span class="cv-red">I</span> <span class="cv-red">L</span>ov<span class="cv-red">E</span> <span class="cv-red">C</span>avalr<span class="cv-red">Y</span></span>! <span class="cv-red">ILECY</span>, is my word, my biography, and the reason why I`m here, in this field. ' }
  ]

  AdditionalCard = [
    {
      "number": 1,
      "mainClassName": "favorite-os",
      "imgClassName": "faveOs-image",
      "imgAddress": "/assets/img/faveOs.png",
      "titleClassName": "fave-title",
      "TitleName": "Favorite OS",
      "cardTextClassName": "fave-text",
      "cardtext": [
        { "name": "Microsoft`s Windows", "status": "" },
        { "name": "Debian-based linux", "status": "" },
        { "name": "Google`s Android", "status": "" },
        { "name": "Google`s chromeOS", "status": "" }
      ],
      "cardLogo": [
        "/assets/logo/Windows.png",
        "/assets/logo/debian.png",
        "/assets/logo/ubuntu.png",
        "/assets/logo/kali.png",
        "/assets/logo/Android.png",
        "/assets/logo/chrome.png"
      ]
    },
    {
      "number": 2,
      "mainClassName": "train-creativity",
      "imgClassName": "creativity-image",
      "imgAddress": "/assets/img/creativity.jpg",
      "titleClassName": "create-title",
      "TitleName": "Training creativity",
      "cardTextClassName": "create-text",
      "cardtext": [
        { "name": "Adobe Photoshop", "status": "" },
        { "name": "Adobe Illustrator", "status": "(not completely)" },
        { "name": "Adobe After Effects", "status": "(pending)" }
      ],
      "cardLogo": [
        "/assets/logo/photoshop.png",
        "/assets/logo/illustrator.png",
        "/assets/logo/AfterEffects.png"
      ]
    },
    {
      "number": 3,
      "mainClassName": "have-fun",
      "imgClassName": "fun-image",
      "imgAddress": "/assets/img/createFun.png",
      "titleClassName": "fun-title",
      "TitleName": "creating the FUN!",
      "cardTextClassName": "fun-text",
      "cardtext": [
        { "name": "Unity game engine", "status": "" },
        { "name": "Blendor", "status": "(pending)" },
        { "name": "Adobe Premiere", "status": "(pending)" }
        // "Unreal game engine"
      ],
      "cardLogo": [
        // "/assets/logo/UNREAL.png",
        "/assets/logo/adobePremiere.png",
        "/assets/logo/unity.png",
        "/assets/logo/Blender.png"
      ]
    },
    {
      "number": 4,
      "mainClassName": "team-work",
      "imgClassName": "team-image",
      "imgAddress": "/assets/img/teamwork.jpg",
      "titleClassName": "team-title",
      "TitleName": "Team work!",
      "cardTextClassName": "team-text",
      "cardtext": [
        { "name": "Network+", "status": "" },
        { "name": "Project management apps", "status": "" },
        { "name": "Project control system", "status": "" }
      ],
      "cardLogo": [
        "/assets/logo/jira.png",
        "/assets/logo/clickup.png",
        // "/assets/logo/network.png",
        "/assets/logo/git.png",
        "/assets/logo/tfs.png",
        "/assets/logo/github.png",
        "/assets/logo/gitlab.png"
      ]
    }
  ]

  router = {
    main: "/main",
    biography: "/biography",
    details: "/details",
    chat: "/chat",
    skill: "/skills"
  }

  certImage =
    {
      JS: "assets/cert/JS.png",
      net: "assets/cert/net.png",
      php: "assets/cert/php.png",
      query: "assets/cert/Query.png",
      sql: "assets/cert/SQL.png",
      tsql: "assets/cert/TSQL.png",
      webdesign: "assets/cert/webDesign.png"
    }

  timeLine = [
    {
      "index": 0,
      "mainClass": "uniTehran",
      "themeType": 1,
      "iconClass": "fa-solid fa-graduation-cap",
      "date": "2019, Jul",
      "title": "Web design fundumentals",
      "description": [
        { "number": 1, "title": "Academy:", "value": "Entrepreneurship Center of Tehran University" },
        { "number": 2, "title": "Description: ", "value": "The journey started here! with HTML, CSS, JS and Wordpress; with an introduction of UI, UX and SEO!" }
      ],
      "certUrl": this.certImage.webdesign
    },
    {
      "index": 1,
      "mainClass": "bootstrap-course",
      "themeType": 2,
      "iconClass": "fa-solid fa-book",
      "date": "2019, Oct",
      "title": "Bootstrap 3.4.1",
      "description": [
        { "number": 1, "title": "Description: ", "value": "A self-teaching course using test projects and bootstrap official dcoumentation." },
      ],
      "certUrl": ""
    },
    {
      "index": 2,
      "mainClass": "php-roocket",
      "themeType": 3,
      "iconClass": "fa-solid fa-film",
      "date": "2020, Apr",
      "title": "PHP fundumentals",
      "description": [
        { "number": 1, "title": "Academy: ", "value": "Roocket educational website" },
        { "number": 2, "title": "Description: ", "value": "I was using wordpress for my projects and i couldn`t customize the php codes by myself." },
      ],
      "certUrl": this.certImage.php
    },
    {
      "index": 3,
      "mainClass": "network-maktab",
      "themeType": 4,
      "iconClass": "fa-solid fa-film",
      "date": "2020, Nov",
      "title": "Network +",
      "description": [
        { "number": 1, "title": "Academy: ", "value": "Maktab Khoone educational website" },
        { "number": 2, "title": "Description: ", "value": "In order to expand my vision, and of course find a job, I had to know how the Network works!" },
      ],
      "certUrl": this.certImage.net
    },
    {
      "index": 4,
      "mainClass": "sql-design",
      "themeType": 5,
      "iconClass": "fa-solid fa-graduation-cap",
      "date": "2021, Jan",
      "title": "SQL Server 2019 Design and implementation",
      "description": [
        { "number": 1, "title": "Academy: ", "value": "Faratar az Danesh" },
        { "number": 2, "title": "Description: ", "value": "Installation and implementaion, Design, relations, login, role, user and security stuff, log, backup, restore and data safetiness, and etc." },
      ],
      "certUrl": this.certImage.sql
    },
    {
      "index": 5,
      "mainClass": "sql-query",
      "themeType": 6,
      "iconClass": "fa-solid fa-graduation-cap",
      "date": "2021, Apr",
      "title": "SQL Server 2019 Querying",
      "description": [
        { "number": 1, "title": "Academy: ", "value": "Faratar az Danesh" },
        { "number": 2, "title": "Description: ", "value": "Fisrt course was done and it was the time for querying. DDL commands, Aggregates, CTE, JOIN, UNION, Pivot and Unpivot, Isolation transaction, Index, and etc." },
      ],
      "certUrl": this.certImage.query
    },
    {
      "index": 6,
      "mainClass": "c-sharp",
      "themeType": 1,
      "iconClass": "fa-solid fa-film",
      "date": "2021, Jul",
      "title": "C# programming, winforms and Asp.net MVC",
      "description": [
        { "number": 1, "title": "Academy: ", "value": "Toplearn educational website" },
        { "number": 2, "title": "Description: ", "value": "A fresh start! C# was the beginning of back-end! Fundamentals to advanced, using winforms and asp.net MVC." },
      ],
      "certUrl": ""
    },
    {
      "index": 7,
      "mainClass": "t-sql",
      "themeType": 2,
      "iconClass": "fa-solid fa-graduation-cap",
      "date": "2021, Jul",
      "title": "T-SQL programming 2019",
      "description": [
        { "number": 1, "title": "Academy: ", "value": "Faratar az Danesh" },
        { "number": 2, "title": "Description: ", "value": "The last step for me in Sql server. Building blocks, transactions, locking, blocking and isolation levels, Store procedures, and etc." },
      ],
      "certUrl": this.certImage.tsql
    },
    {
      "index": 8,
      "mainClass": "vb-net",
      "themeType": 4,
      "iconClass": "fa-solid fa-book",
      "date": "2021, Oct",
      "title": "VB.net",
      "description": [
        { "number": 1, "title": "Description: ", "value": "Vb.net was the requirement for my job. So? I forced myself to self-teaching vb.net while working on our project." },
      ],
      "certUrl": ""
    },
    {
      "index": 9,
      "mainClass": "web-api",
      "themeType": 3,
      "iconClass": "fa-solid fa-book",
      "date": "2021, Oct",
      "title": "Web API MVC",
      "description": [
        { "number": 1, "title": "Description: ", "value": "Continuing asp.net MVC with multi-languages and pagination, then testing Asp.net CORE and starting my favourite part of back-end: API." },
      ],
      "certUrl": ""
    },
    {
      "index": 10,
      "mainClass": "javascript",
      "themeType": 7,
      "iconClass": "fa-solid fa-film",
      "date": "2021, Nov",
      "title": "Javascript",
      "description": [
        { "number": 1, "title": "Academy: ", "value": "Roocket educational website" },
        { "number": 2, "title": "Description: ", "value": "Getting back to my roots was satisfying: Front-End. Continuing Javascript with Roocket (JS, ES6, ES7, ES8) was an important step to my dream: Full-Stack developer." },
      ],
      "certUrl": this.certImage.JS
    },
    {
      "index": 11,
      "mainClass": "angular",
      "themeType": 2,
      "iconClass": "fa-solid fa-film",
      "date": "2021, Dec",
      "title": "Angular by Google",
      "description": [
        { "number": 1, "title": "Academy: ", "value": "Mr. Shariat (Youtube channel)" },
        { "number": 2, "title": "Description: ", "value": "Hey Google! As a google fan, i don`t care about React! Is it a gift from the gods? Ok but i love angular! :)" },
      ],
      "certUrl": ""
    },
    {
      "index": 12,
      "mainClass": "sass",
      "themeType": 1,
      "iconClass": "fa-solid fa-book",
      "date": "2022, Apr",
      "title": "Syntactically Awesome StyleSheet!",
      "description": [
        { "number": 1, "title": "Description: ", "value": "Learning Sass is like updating from USB 1.0 to USB 3.0! A self-teaching course!" },
      ],
      "certUrl": ""
    },
    {
      "index": 13,
      "mainClass": "tailwind",
      "themeType": 6,
      "iconClass": "fa-solid fa-film",
      "date": "2022, Jun",
      "title": "Tailwind (currently): ",
      "description": [
        { "number": 1, "title": "Academy: ", "value": "Roocket educational website" },
        { "number": 2, "title": "Description: ", "value": "I don`t know much about tailwind but it seems it makes css files smaller, with faster developing!" },
      ],
      "certUrl": ""
    },
    {
      "index": 14,
      "mainClass": "unity",
      "themeType": 3,
      "iconClass": "fa-solid fa-book",
      "date": "2022, Jun",
      "title": "Unity engine (currently):",
      "description": [
        { "number": 1, "title": "Description: ", "value": "Creating the FUN! It`s the best sentence describing this learning course! Creating game was my dream and i`m going to make it real!" },
      ],
      "certUrl": ""
    }
  ]

  expTimeline = [
    {
      "index": 1,
      "mainClass": "wirapos-support",
      "dataDate": "2021, Jun (1 month)",
      "title": "Sofware support expert",
      "titleClass": "wirapos-support-title",
      "text": [
        { "number": 1, "Class": "wirapos-support-text", "content": "My very first job! about two month before i move between developers" },
      ]
    },
    {
      "index": 2,
      "mainClass": "wirapos-intership",
      "dataDate": "2021, Jul (1 month)",
      "title": "Sofware developer intership and test",
      "titleClass": "wirapos-support-title",
      "text": [
        { "number": 1, "Class": "wirapos-support-text", "content": "My first mission was testing app and finding bugs and problems." },
      ]
    },
    {
      "index": 3,
      "mainClass": "wirapos-dev",
      "dataDate": "2021, Aug (current job)",
      "title": "Sofware developer expert",
      "titleClass": "wirapos-dev-title",
      "text": [
        { "number": 1, "Class": "wirapos-dev-text", "content": "Working on 'WiraPos', a windowsForm application based on veb.netFramework 4.6 :), some SQL development, and etc." },
      ]
    },
    {
      "index": 4,
      "mainClass": "fave",
      "dataDate": "2021, Dec (3 month)",
      "title": "Fave, a personal project",
      "titleClass": "fave-title",
      "text": [
        { "number": 1, "Class": "fave-text", "content": "Back-end: WebApi with identity, jwt tokens, and etc; Front-end: Angular" },
      ]
    },
    {
      "index": 5,
      "mainClass": "unity",
      "dataDate": "2021, Dec (3 month)",
      "title": "Learning unity with my team!",
      "titleClass": "unity-title",
      "text": [
        { "number": 1, "Class": "unity-text", "content": "Learning and working on projects in a team with unity game engine." },
      ]
    }
  ]

}



