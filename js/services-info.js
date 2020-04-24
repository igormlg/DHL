$("select").on("click" , function() {
  
    $(this).parent(".select-box-wrap1").toggleClass("open");
    
  });
  

  
  
  $("select").on("change" , function() {
    
    var selection = $(this).find("option:selected").text(),
        labelFor = $(this).attr("id"),
        label = $("[for='" + labelFor + "']");
      
    label.find(".label-desc3").html(selection);
      
  });

  $(document).mouseup(function (e)
  {
      var container = $(".select-box-wrap1");
  
      if (container.has(e.target).length === 0)
      {
          container.removeClass("open");
      }
  });

  