$(document).ready(
function()
{
  $(".logo").hover(
  function()
  {
    var rand = Math.random();
    rand *= 2;
    rand = Math.floor(rand);

    var replacement = null;

    if (rand >= 0.5)
    {
      replacement = ".excl"
    }
    else
    {
      replacement = ".quest"
    }
    
    $(".excl").stop().animate({ opacity: 0}, 300);
    $(".quest").stop().animate({ opacity: 0}, 300,
    function()
    {
      $(replacement).stop().animate({ opacity: 1}, 300);
    } );
  }, 

  function()
  {
    $(".quest").stop().animate({ opacity: 0}, 300);  
    $(".excl").stop().animate({ opacity: 0}, 300,
    function()
    {
      $(".excl").stop().animate({ opacity: 1}, 300);
      $(".quest").stop().animate({ opacity: 1}, 300);
    } );
  } );

  $("header a").click(
  function(e)
  {
    e.preventDefault();
    $(this).css("border", "none"); 
    $(this).css("outline", "none");
    hash = $(this).attr("href");
    var offset = $(hash).offset();
    $("html,body").animate({
        scrollTop: offset.top,
        scrollLeft: offset.left
    }, 500, function() {
      window.location.hash = hash;
      document.title = $(hash).data("title") + " | Philipp Steinmann"
    } );
  } );

  $(".back").click(
  function()
  {
    prevPost();
  } );
 
  $(".next").click(
  function()
  { 
    nextPost();
  } );

  $(".show-nav").click(
  function()
  {
    $("nav").slideToggle(500);
  } );
} );

function nextImage()
{ 
  current_img = (current_img + 1) % images.length;
  $(".slideshow-img").fadeOut(400,
  function()
  {
    $(".slideshow-img").attr("src", images[current_img].url);
    $(".slideshow-img").attr("title", images[current_img].caption);
    $(".slideshow-img").attr("alt", images[current_img].caption);
    $(".slideshow-img").fadeIn(400);
  } );
}

function prevPost()
{
  if (current_post + 1  < posts.length)
  {
    current_post += 1;
    updatePost();
  }
}

function nextPost()
{
  if (current_post - 1 >= 0)
  {
    current_post -= 1;
    updatePost();
  }
}

function updatePost()
{
  $("article").fadeOut(300, function()
  {
    post = posts[current_post];
    $("article h2").text(post.title);
    $("article h3").text(post.subtitle);
    $("article time").text(post.date).attr("datetime", post.date);
    $.get(post.url.substr(1), function(content)
    {
      $("article .article-content").html(content);
    } );
    $("article").fadeIn(300);
  } );
}
