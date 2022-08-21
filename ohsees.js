function openMenu() {
  document.getElementById("menu").style.height = "100%";
}
  
function closeMenu() {
  document.getElementById("menu").style.height = "0%";
}

function randomAlbum() {
  var pages = ["album-pages/idm.html",
    "album-pages/pink_brown.html",
    "album-pages/bangers_vs_fuckers.html",
    "album-pages/vol_1.html",
    "album-pages/vol_2.html",
    "album-pages/vol_3.html",
    "album-pages/vol_4.html",
    "album-pages/Cool_Death_of_Island_Raiders.html",
    "album-pages/grave_blockers.html",
    "album-pages/sucks_blood.html",
    "album-pages/thee_hounds_of_foggy_notion.html",
    "album-pages/the_masters_bedroom_is_worth_spending_a_night_in.html",
    "album-pages/Help.html",
    "album-pages/dog_poison.html",
    "album-pages/warm_slime.html",
    "album-pages/castlemania.html",
    "album-pages/carrion_crawler_the_dream.html",
    "album-pages/putrifiers.html",
    "album-pages/floating_coffin.html",
    "album-pages/drop.html",
    "album-pages/cold_hot_plumbs.html",
    "album-pages/mutilator_defeated_at_last.html",
    "album-pages/a_weird_exits.html",
    "album-pages/an_odd_entrances.html",
    "album-pages/orc.html",
    "album-pages/memory_of_a_cut_off_head.html",
    "album-pages/smote_reverser.html",
    "album-pages/face_stabber.html",
    "album-pages/12_s.html",
    "album-pages/protean_threat.html",
    "album-pages/metamorphosed.html",
    "album-pages/weirdo_hairdo.html",
    "album-pages/a_foul_form.html"];

  var value = pages[Math.floor(Math.random() * pages.length)];
  console.log(window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/')));
  if (window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/')).endsWith("album-pages")) {
    window.location = "../" + value;}
  else {window.location = value;}
}