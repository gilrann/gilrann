function slowScroll(id) {
         var offset = 0;
         $('html, body').animate({
              scrollTop: $(id).offset().top - offset
         }, 1000);
         return false;
     }


     var fActive='';
     function filterColor(color){
     if(fActive!=color){
     	$('.projects__box').filter('.'+color).slideDown(600);
     	$('.projects__box').filter(':not(.'+color+')').slideUp(600);fActive=color;}
     }
     	$('.f-learning').click(function(){filterColor('learning');});
     	$('.f-training').click(function(){filterColor('training');});
     	$('.f-real').click(function(){filterColor('real');});
     	$('.f-all').click(function(){$('div').slideDown();fActive='all';});



      $(function() {
              $(".skills_r_item").knob();
          });


var myCircle = Circles.create({
  id:                  'circles-1',
  radius:              80,
  value:               85,
  maxValue:            100,
  width:               15,
  text:                function(value){return value + '%';},
  colors:              ['#e4524f', '#452d7933'],
  duration:            400,
  wrpClass:            'circles-wrp',
  textClass:           'circles-text',
  valueStrokeClass:    'circles-valueStroke',
  maxValueStrokeClass: 'circles-maxValueStroke',
  styleWrapper:        false,
  styleText:           false
});

var myCircle = Circles.create({
  id:                  'circles-2',
  radius:              80,
  value:               80,
  maxValue:            100,
  width:               15,
  text:                function(value){return value + '%';},
  colors:              ['#e4524f', '#452d7933'],
  duration:            400,
  wrpClass:            'circles-wrp',
  textClass:           'circles-text',
  valueStrokeClass:    'circles-valueStroke',
  maxValueStrokeClass: 'circles-maxValueStroke',
  styleWrapper:        false,
  styleText:           false
});

var myCircle = Circles.create({
  id:                  'circles-3',
  radius:              80,
  value:               30,
  maxValue:            100,
  width:               15,
  text:                function(value){return value + '%';},
  colors:              ['#e4524f', '#452d7933'],
  duration:            400,
  wrpClass:            'circles-wrp',
  textClass:           'circles-text',
  valueStrokeClass:    'circles-valueStroke',
  maxValueStrokeClass: 'circles-maxValueStroke',
  styleWrapper:        false,
  styleText:           false
});
