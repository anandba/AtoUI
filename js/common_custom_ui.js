  $('.table-defualt tr').dblclick(function (e) {
                window.location.replace('http://demo.rayaztech.com/html/indosakura/view.html');
            });
            $('.navbar-toggles').click(function () {
                $('.sidebar-main').toggle();
                $('body').toggleClass('sidebar-open');
            });
            //Sidebar Toggle

            var windows = jQuery(window).width();
            if (windows < 500) {
                $(document).on('click', '.sidebar-open .content-wrapper', function (e) {
                    e.preventDefault();
                    $('.sidebar-main').toggle();
                    $('body').toggleClass('sidebar-open');
                });
            }
            // $(document).on('click', '.sidebar-open .content-wrapper', function () {
            //  $('.sidebar-main').toggle();
            //    $('body').toggleClass('sidebar-open');
            // });
            $('.selectpicker').selectpicker({dropdownAlignRight: true});
            $(".toggler").click(function (e) {
                e.preventDefault();
                $('.cat' + $(this).attr('data-prod-cat')).toggle();
                $(this).find('.fa').toggleClass('fa-minus');
                $(this).parent('td').attr('rowspan', $(this).parent('td').attr('rowspan') == '2' ? '' : '2');
                $(this).parents("tbody").toggleClass("open-tbody");

            });
            $(".panel-title").click(function () {
                $(this).parents(".panel").find(".toggle-content").slideToggle("swing");
                $(this).parents(".panel").toggleClass("panel-open");
                $(this).find("i").toggleClass("fa-plus fa-minus");

            });
            $(document).ready(function () {
                pageheight();
                $('.bootstrap-select .bs-caret').html('<i class="fa fa-angle-down"></i>');
            });

            

            $(window).on('resize', function () {
                pageheight();
            });
            function pageheight() {
                $('.page-container').css("min-height", $(window).height() - $('footer').height() - $('.navbar').height());
            }

            

            function redirect_page(){
                if($('#billing-select').val() == "INVOICE"){
                    location.href = "invoice_create.html"
                }

                if($('#billing-select').val() == "ESTIMATION"){
                    location.href = "estimation_create.html"
                }

            }

            function redirect_page_list(){
                if($('#billing-select').val() == "INVOICE"){
                    location.href = "invoice_list.html"
                }

                if($('#billing-select').val() == "ESTIMATION"){
                    location.href = "estimation_list.html"
                }

            }

            function custom_md(){
                var windows = jQuery(window).width();
                    $(".custom-md").each(function(){
                        $(this).width($(this).data("width")+"%")
                    })
                    if (windows < 1150) {  
                        $(".custom-md").each(function(){
                            $(this).width('100%');
                        })
                    }
            }
            
            $(function(){
                custom_md();
                if(($("#billing-select").val() != "Select Billing") && ($("#country-select").val() != "Select Country")){
                    $("#list-body").addClass("hidden");
                }
            })

            $(window).resize(function(){
                custom_md();
            })  

            function change_list_body(){
                if(($("#billing-select").val() != "Select Billing") && ($("#country-select").val() != "Select Country")){
                    $("#list-body").removeClass("hidden");
                }  
                else{
                   $("#list-body").addClass("hidden"); 
                }
            }

