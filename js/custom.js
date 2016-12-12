//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
$(window).bind("load resize", function() {
topOffset = 50;
width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
if (width < 768) {
$('div.navbar-collapse').addClass('collapse');
topOffset = 100; // 2-row-menu
} else {
$('div.navbar-collapse').removeClass('collapse');
}

height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
height = height - topOffset;
if (height < 1) height = 1;
if (height > topOffset) {
$("#page-wrapper").css("min-height", (height) + "px");
}
});   
});

$(".dropdown-menu li a").click(function(){
$(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
$(this).parents(".dropdown").find('.btn').val($(this).data('value'));
});

/*SHOW/HIDE sections code*/
$('#resourceDetailsSection').on('shown.bs.collapse', function () {
$(".caret-icon").removeClass("fa-caret-square-o-up").addClass("fa-caret-square-o-down");
});
$('#resourceDetailsSection').on('hidden.bs.collapse', function () {
$(".caret-icon").removeClass("fa-caret-square-o-down").addClass("fa-caret-square-o-up");
});
$('#clientDetailsSection').on('shown.bs.collapse', function () {
$(".caret-icon").removeClass("fa-caret-square-o-up").addClass("fa-caret-square-o-down");
});
$('#clientDetailsSection').on('hidden.bs.collapse', function () {
$(".caret-icon").removeClass("fa-caret-square-o-down").addClass("fa-caret-square-o-up");
});
$('#countryDetailsSection').on('shown.bs.collapse', function () {
$(".caret-icon").removeClass("fa-caret-square-o-up").addClass("fa-caret-square-o-down");
});
$('#countryDetailsSection').on('hidden.bs.collapse', function () {
$(".caret-icon").removeClass("fa-caret-square-o-down").addClass("fa-caret-square-o-up");
});
$('#bankDetailsSection').on('shown.bs.collapse', function () {
$(".caret-icon").removeClass("fa-caret-square-o-up").addClass("fa-caret-square-o-down");
});
$('#bankDetailsSection').on('hidden.bs.collapse', function () {
$(".caret-icon").removeClass("fa-caret-square-o-down").addClass("fa-caret-square-o-up");
});
$('#yasuoDetailsSection').on('shown.bs.collapse', function () {
$(".caret-icon").removeClass("fa-caret-square-o-up").addClass("fa-caret-square-o-down");
});
$('#yasuoDetailsSection').on('hidden.bs.collapse', function () {
$(".caret-icon").removeClass("fa-caret-square-o-down").addClass("fa-caret-square-o-up");
});
$('#detailsSection').on('shown.bs.collapse', function () {
$(".caret-icon").removeClass("fa-caret-square-o-up").addClass("fa-caret-square-o-down");
});
$('#detailsSection').on('hidden.bs.collapse', function () {
$(".caret-icon").removeClass("fa-caret-square-o-down").addClass("fa-caret-square-o-up");
});
/*SHOW/HIDE sections code ENDS*/

/*initialize tooltip*/
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});

/*intialize datepicker*/
$(function () {
$('.datepicker').datepicker({
autoclose: true
});
});

/*table row delete - generic*/
$(".table").on('click','.fa-minus',function(){
$(this).closest('tr').remove();
});
/*table row add - settings_bp.html currency tbl*/
$(".fa-plus.currency-plus").click(function(){
var markup = '<tr><td><input type="text"/></td><td><input type="text"/></td><td><input type="text"/></td><td><input type="text"/></td></tr>';
$("#currency-tbl tbody").append(markup);
});


