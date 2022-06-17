const root = document.documentElement;

// Setup page based on settings
document.title                                      = settings.title;
document.getElementById("title").innerHTML          = settings.title;
document.getElementById("description").innerHTML    = settings.description;

antiColor = invertColor(settings.textColor);

// Set css variables in :root based on settings.mediaBlur and settings.mediaSat
root.style.setProperty("--blur",        settings.mediaBlur);
root.style.setProperty("--saturate",    settings.mediaSat);
root.style.setProperty("--textColor",   settings.textColor);
root.style.setProperty("--antiColor",   antiColor);

// if settings.media is a video
if (settings.media.indexOf(".mp4") > -1 || settings.media.indexOf(".webm") > -1) {
    // insert video below "description" element
    var video = document.createElement("video");
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.classList.add("bg");
    video.setAttribute("src", settings.media);
    document.body.appendChild(video);
} else {
    // insert image below "description" element
    var image = document.createElement("img");
    image.classList.add("bg");
    image.setAttribute("src", settings.media);
    document.body.appendChild(image);
}

