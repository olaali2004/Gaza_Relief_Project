// بيانات المساعدات (Arrays/Objects) [cite: 10, 162]
const aidList = [
    { area: "دير البلح", type: "مياه شرب", status: "متاح" },
    { area: "الرمال", type: "طرود طبية", status: "قيد الانتظار" },
    { area: "مخيم جباليا", type: "وجبات ساخنة", status: "مكتمل" },
    { area: "خانيونس", type: "خيام", status: "متاح" }
];

$(document).ready(function() {
    
    // استخدام Loops لعرض البيانات في الجدول [cite: 10, 162]
    const tableBody = $('#aidTableBody');
    aidList.forEach(item => {
        let statusClass = item.status === 'متاح' ? 'text-success' : 'text-danger';
        let row = `<tr>
            <td>${item.area}</td>
            <td>${item.type}</td>
            <td class="${statusClass} fw-bold">${item.status}</td>
        </tr>`;
        tableBody.append(row);
    });

    // أحداث الضغط Submit مع Validation بسيط [cite: 161]
    $('#aidForm').on('submit', function(e) {
        e.preventDefault();
        
        let name = $('#fullName').val();
        
        // استخدام jQuery Fade لإظهار رسالة النجاح [cite: 163]
        $('#msg').text(`شكراً يا ${name}، تم إرسال طلبك وسنتواصل معك قريباً.`).fadeIn();
        
        // تفريغ النموذج بعد الإرسال
        $(this).trigger("reset");
    });

    // تأثير jQuery Slide عند النقر على أيقونات الخدمات [cite: 163]
    $('.service-card').on('click', function() {
        $(this).find('p').slideToggle();
    });

});
// كود تفعيل عملية البحث في جدول المساعدات
$(document).ready(function(){
    $("#searchInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        
        // نقوم بعمل فحص لكل صف داخل الجدول
        $("#aidTableBody tr").filter(function() {
            // toggle تقوم بإظهار الصف إذا كان الشرط صحيحاً (النص موجود) وإخفائه إذا كان خطأ
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});