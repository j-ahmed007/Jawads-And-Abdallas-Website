const helloBtn = document.getElementById('hello-btn');

helloBtn.addEventListener('click', () => {
  window.alert('Hello There!');
})

function openTab(evt, tabName) {
  var i, sectioncontent, tablinks;
  sectioncontent = document.getElementsByClassName("section-content");
  for (i = 0; i < sectioncontent.length; i++) {
    sectioncontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab-links");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("tab-default").click();