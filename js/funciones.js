function formDraw(divContent) {
    var form = '<form> \
                    <div class="mb-3"> \
                        <label for="exampleInputEmail1" class="form-label">Email address</label> \
                        <input type="email" class="form-control" id="exampleInputEmail1" required aria-describedby="emailHelp"> \
                    </div> \
                    <div class="mb-3"> \
                        <label for="exampleInputPassword1" class="form-label">Password</label> \
                        <input type="password" class="form-control" id="exampleInputPassword1"> \
                    </div> \
                    <div class="mb-3"> \
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" required> \
                        <label class="form-check-label" for="exampleCheck1" >Check me out</label> \
                    </div> \
                    <button type="submit" class="btn btn-primary" id="submit01"> Enviar</button> \
                </form>'
    divContent.innerHTML = form;
}



function exitMessageDraw(divContent) {
    // se los dejo de tarea...
}