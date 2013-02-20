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
} );

function nextImage()
{ 
  console.log(current_img);
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
