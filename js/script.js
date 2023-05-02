$(function () {
   $("table").resizableColumns({
       store: window.store
   });
   
   $('.table').dragableColumns();
   
   $("tbody").sortable({
    cursor: 'row-resize',
    placeholder: 'ui-state-highlight',
    opacity: '0.55',
    items: '.ui-sortable-handle'
  }).disableSelection();

  var $chk = $("#grpChkBox input:checkbox"); // cache the selector
  var $tbl = $(".table");

  $chk.prop('checked', true); // check all checkboxes when page loads

  $chk.click(function () {
      var colToHide = $tbl.find("." + $(this).attr("name"));
      $(colToHide).toggle();
  });
});

