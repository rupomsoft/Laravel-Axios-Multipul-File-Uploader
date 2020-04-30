

$('.addBtn').on('click',function () {

        let newTableRow=
                    "<tr>"+
                        "<td><input class='form-control' type='file'></td>"+
                        "<td><h6 class='.fileSize'>File Size</h6></td>"+
                        "<td><button class='btn cancelBtn btn-danger btn-sm'>Cancel</button></td>"+
                        "<td><button  class='btn upBtn btn-primary btn-sm'>Upload</button></td>"+
                        "<td><h6 class='.fileUpMB'>Uploaded(MB)</h6></td>"+
                        "<td><h6 class='.fileUpPercentage'>Uploaded(%)</h6></td>"+
                        "<td><h6 class='.fileStatus'>Status</h6></td>"+
                    "</tr>";

         $('.fileList').append(newTableRow);


         //Remove Row
         $('.cancelBtn').on('click',function () {
                    $(this).parents('tr').remove();
         })

})
