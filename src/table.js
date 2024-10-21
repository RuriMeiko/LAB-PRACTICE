$(document).ready(function () {
    $("#togglePassword").click(function () {
        const passwordInput = $("#password");
        const passwordIcon = $("#togglePasswordIcon");
        if (passwordInput.attr("type") === "password") {
            passwordInput.attr("type", "text");
            passwordIcon.removeClass("bi-eye-slash").addClass("bi-eye");
        } else {
            passwordInput.attr("type", "password");
            passwordIcon.removeClass("bi-eye").addClass("bi-eye-slash");
        }
    });


    $('#infoModal').on('show.bs.modal', function (event) {
        const button = $(event.relatedTarget);
        const userInfo = button.data('user');
        const modal = $(this);

        const mode = button.data('mode');
        if (mode === 'new') {
            
            modal.find('.modal-body input').attr('disabled', false);
            modal.find('.modal-body select').attr('disabled', false);
            modal.find('.modal-body #username').val("");
            modal.find('.modal-body #password').val("");
            modal.find('.modal-body #fullname').val("");
            modal.find('.modal-body #address').val("");
            modal.find('.modal-body #email').val("");
            modal.find('.modal-body #sex').val("Nam");
            console.log(modal.find('.modal-footer #save-btn'));
            
            modal.find('.modal-footer #save-btn').text('Thêm');
            modal.find('.modal-footer #save-btn').show();

            return $('#infoModal .modal-title').text('Thêm người dùng');
        }

        modal.find('.modal-footer #save-btn').text('Lưu');

        modal.find('.modal-body #username').val(userInfo.username);
        modal.find('.modal-body #password').val(userInfo.password);
        modal.find('.modal-body #fullname').val(userInfo.fullname);
        modal.find('.modal-body #address').val(userInfo.address);
        modal.find('.modal-body #email').val(userInfo.email);
        modal.find('.modal-body #sex').val(userInfo.sex);

        if (mode === 'view') {
            modal.find('.modal-title').text('Xem thông tin của ' + userInfo.username);
            modal.find('.modal-body input').attr('disabled', true);
            modal.find('.modal-body select').attr('disabled', true);

            modal.find('.modal-footer #save-btn').hide();

        } else if (mode === 'edit') {
            modal.find('.modal-title').text('Sửa thông tin của ' + userInfo.username);

            modal.find('.modal-body input').attr('disabled', false);
            modal.find('.modal-body select').attr('disabled', false);

            modal.find('.modal-footer #save-btn').show();

        }


    });




    $('#delModel').on('show.bs.modal', function (event) {
        const button = $(event.relatedTarget);
        const userId = button.data('id');
        const modal = $(this);

        modal.find('.modal-body').text(`Bạn có chắc chắn muốn xóa ${userId} không?`);


    });

});