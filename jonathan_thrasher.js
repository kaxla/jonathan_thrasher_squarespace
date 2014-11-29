//LOAD JQUERY--GOES IN SETTINGS->ADVANCED->CODE INJECTION

<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>

//PUT LOGO ON MAIN PAGE--GOES IN PAGES->HOME SETTINGS->ADVANCED->PAGE HEADER CODE INJECTION

<script type="text/javascript">
  $(document).ready(function(){
    $(".page-title-wrapper").first().html($("<img>").attr("src", "http://static.squarespace.com/static/544eb2f0e4b0134a742345b2/t/5473d4a4e4b088c2a6bfc6bd/1416877220448/jticonwhiteoutline.png"));
  });
</script>

//ADD 'VIEW GALLERY' BUTTONS TO LOVE AND MARRIAGE SECTION--GOES IN PAGES->LOVE & MARRIAGE SETTINGS->ADVANCED->PAGE HEADER AND CODE INJECTION

<script type="text/javascript">
  $(document).ready(function(){
    $('.page-title-wrapper:eq(0)').after('<a href="/dwgallery"><div class="gallery-button-border"><div class="gallery-button">view gallery</div></div></a>');
    $('.page-title-wrapper:eq(2)').after('<a href="/weddingsgallery"><div class="gallery-button-border"><div class="gallery-button">view gallery</div></div></a>');
    $('.page-title-wrapper:eq(4)').after('<a href="/engagementsgallery"><div class="gallery-button-border"><div class="gallery-button">view gallery</div></div></a>');
    $('.page-title-wrapper:eq(6)').after('<a href="/ringsgallery"><div class="gallery-button-border"><div class="gallery-button">view gallery</div></div></a>');
  })
</script>

//ADD 'VIEW GALLERY' BUTTONS TO PORTRAITS SECTION--GOES IN PAGES->PORTRAITS SETTINGS->ADVANCED->PAGE HEADER AND CODE INJECTION

<script type="text/javascript">
  $(document).ready(function(){
    $('.page-title-wrapper:eq(0)').after('<a href="/seniorsgallery"><div class="gallery-button-border"><div class="gallery-button">view gallery</div></div></a>');
    $('.page-title-wrapper:eq(2)').after('<a href="/modelgallery"><div class="gallery-button-border"><div class="gallery-button">view gallery</div></div></a>');
  })
</script>

//ADD 'VIEW GALLERY' BUTTONS TO PERSONAL SECTION--GOES IN PAGES->PERSONAL SETTINGS->ADVANCED->PAGE HEADER AND CODE INJECTION

<script type="text/javascript">
  $(document).ready(function(){
    $('.page-title-wrapper:eq(0)').after('<a href="/travelgallery"><div class="gallery-button-border"><div class="gallery-button">view gallery</div></div></a>');
    $('.page-title-wrapper:eq(2)').after('<a href="/phodographygallery"><div class="gallery-button-border"><div class="gallery-button">view gallery</div></div></a>');
  })
</script>
