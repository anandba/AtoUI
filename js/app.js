// Mini sidebar
// -------------------------

// Toggle mini sidebar
$('.sidebar-main-toggle').on('click', function (e) {
    e.preventDefault();

    // Toggle min sidebar class
    $('body').toggleClass('sidebar-xs');
});
