function changedate(){
        var mydate=$('#field_448601').val()
        date = new Date(mydate);
        next_date = new Date(date.setDate(date.getDate() + 60));
        const today = next_date;
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1;
        let dd = today.getDate();
        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        const formattedToday = dd + '/' + mm + '/' + yyyy;
        $('#field_448602').val(formattedToday);
    }
    $('#field_448601').change(changedate());    
    $('#field_430036_1_1').prop('readonly', true);
    $('#field_430036_1_2').prop('readonly', true);                                                                                                                                                                                                                      
    $('#field_430036_1_1').val( $('#first_name').val() + ' ' + $('#last_name').val());
    $('#field_430036_1_2').val( $('#exam_details_1').val());