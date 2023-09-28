window.addEventListener("load", (e) => {
    "use strict";
    const BASE_URL = "https://170.239.101.46:8080/bionetsuite_sb";
    const URL_IMG_LOADING_NS = "https://6462530.app.netsuite.com/core/media/media.nl?id=";
    const ID_IMG_LOADING_NS = "18490&c=6462530&h=YP9k6isls_cI8JCK-2WVaaAVhNeKfrsFLLzgJAPUsLZzrQR1&fcts=20220506124019&whence=";

    document.getElementsByName("nluser")[0].value = '';
    document.getElementsByName("nlrole")[0].value = '';

    if (document.getElementById('subtype').value === 'Sale' || document.getElementById('subtype').value === 'Resale') {

        const usuarios_registradores = [
            { area: 'ENSAYOS CLINICOS', usuario: 'JOE LEO PIZARRO PAREDES', correo: 'jpizarro@biomont.com.pe', idusuario: '1746', idrol: '1120', idrevisador: '1739', necesita_revision: true },
            { area: 'CONTROL Y ASEGURAMIENTO DE LA CALIDAD', usuario: 'KARIN KATHERIN MUGA ROJAS', correo: 'kmuga@biomont.com.pe', idusuario: '298', idrol: '1120', correos_adicionales: [''], idrevisador: '301', necesita_revision: true },
            { area: 'CONTROL Y ASEGURAMIENTO DE LA CALIDAD', usuario: 'LIZ MARIANELA GOMEZ BRICEÑO', correo: 'lgomez@biomont.com.pe', idusuario: '300', idrol: '1120', idrevisador: '301', necesita_revision: true },
            { area: 'CONTROL Y ASEGURAMIENTO DE LA CALIDAD', usuario: 'LIZET JANET ALFARO VERDE', correo: 'analistascc@biomont.com.pe', idusuario: '1756', idrol: '1120', idrevisador: '301', necesita_revision: true },
            { area: 'CONTROL Y ASEGURAMIENTO DE LA CALIDAD', usuario: 'SUSAN LIZET ELIAS DA SILVA', correo: 'selias@biomont.com.pe', idusuario: '303', idrol: '1120', idrevisador: '301', necesita_revision: true },
            { area: 'MANTENIMIENTO', usuario: 'MELISSA PIMENTEL MEJIA', correo: 'mpimentel@biomont.com.pe', idusuario: '290', idrol: '1120', idrevisador: '290', necesita_revision: true },
            { area: 'MANTENIMIENTO', usuario: 'SERGIO RODRIGUEZ POLAR', correo: 'srodriguez@biomont.com.pe', idusuario: '27348', idrol: '1120', idrevisador: '290', necesita_revision: true },
            { area: 'INVESTIGACION Y DESARROLLO', usuario: 'MICHAEL TONY OLLERO CAMARENA', correo: 'mollero@biomont.com.pe', idusuario: '22186', idrol: '1120', idrevisador: '1733', necesita_revision: true },
            { area: 'INVESTIGACION Y DESARROLLO', usuario: 'ANABELL CAMPOS CALERO', correo: 'acampos@biomont.com.pe', idusuario: '22197', idrol: '1120', idrevisador: '1733', necesita_revision: true },
            { area: 'INVESTIGACION Y DESARROLLO', usuario: 'YOZELY SOTO VILCHEZ', correo: 'ysoto@biomont.com.pe', idusuario: '312', idrol: '1120', idrevisador: '1733', necesita_revision: true },
            { area: 'PRODUCCION', usuario: 'MARY VICENTA MIRANDA CACEDA', correo: 'mmiranda@biomont.com.pe', idusuario: '295', idrol: '1120', idrevisador: '283', necesita_revision: true },
            { area: 'COMERCIAL', usuario: 'BLANCA SARITA ELUGO GUEVARA', correo: 'belugo@biomont.com.pe', idusuario: '274', idrol: '1120', idrevisador: '274', necesita_revision: true },
            { area: 'TI', usuario: 'MAGNO LUCIO REVATTA ÑAÑEZ', correo: 'ti@biomont.com.pe', idusuario: '319', idrol: '1120', idrevisador: '274', necesita_revision: true },
            { area: 'CONTABILIDAD', usuario: 'PAOLO EPIFANIO VICHARRA FLORIAN', correo: 'pvicharra@Biomont.com.pe', idusuario: '296', idrol: '1120', idrevisador: '274', necesita_revision: true },
            { area: 'RRHH', usuario: 'WILMER PINEDO HUAMAN', correo: 'wpinedo@biomont.com.pe', idusuario: '1802', idrol: '1120', idrevisador: '1802', necesita_revision: true },
            { area: 'RRHH', usuario: 'GERIL BERENIZE CASTRO HUAMAN', correo: 'gcastro@biomont.com.pe', idusuario: '1817', idrol: '1120', idrevisador: '1817', necesita_revision: true },
            { area: 'ADMINISTRACION', usuario: 'ALEXANDRA MEYLIN DURAND BALDEON', correo: 'adurand@biomont.com.pe', idusuario: '22194', idrol: '1120', idrevisador: '276', necesita_revision: true },
            { area: 'ALMACEN', usuario: 'CESAR ENRIQUE SUNCION SOSA', correo: 'csuncion@biomont.com.pe', idusuario: '285', idrol: '1120', idrevisador: '285', necesita_revision: true },
            { area: 'MARKETING', usuario: 'LINCOLN GIAMPIERRE ZAMUDIO CASTILLO', correo: 'lzamudio@biomont.com.pe', idusuario: '24738', idrol: '1120', idrevisador: '24738', necesita_revision: false },
            { area: 'MARKETING', usuario: 'JEAN FRANCO ALCANTARA RODRIGUEZ', correo: 'jalcantara@biomont.com.pe', idusuario: '27817', idrol: '1120', idrevisador: '27817', necesita_revision: false },
            { area: 'MARKETING', usuario: 'ROSALIA GARFIAS DE LA CRUZ', correo: 'rgarfias@biomont.com.pe', idusuario: '1796', idrol: '1120', idrevisador: '', necesita_revision: false },
            { area: 'FINANZAS', usuario: 'ALBINA ROSA YARINGAÑO PIZARRO', correo: 'ayaringano@biomont.com.pe', idusuario: '170', idrol: '1120', idrevisador: '170', necesita_revision: false },
        ];

        const usuarios_revisadores = [
            { usuario: 'IVAN NOLY REYNA WATANABE', correo: 'ireyna@biomont.com.pe', idusuario: '1746', idrol: null, correos_adicionales: ['jpizarro@biomont.com.pe'] },
            { usuario: 'EDISON RONALD VERA VASQUEZ', correo: 'evera@biomont.com.pe', idusuario: '298', idrol: '1076', correos_adicionales: ['kmuga@biomont.com.pe', 'lgomez@biomont.com.pe', 'analistascc@biomont.com.pe', 'selias@biomont.com.pe', 'dguzman@Biomont.com.pe'] },
            { usuario: 'MELISSA PIMENTEL MEJIA', correo: 'mpimentel@biomont.com.pe', idusuario: '300', idrol: '1090', correos_adicionales: ['mantenimiento@biomont.com.pe', 'srodriguez@biomont.com.pe', 'mantenimiento.adm@biomont.com.pe'] },
            { usuario: 'ERIKA LUCIA TACUNAN RIVEROS', correo: 'etacunan@biomont.com.pe', idusuario: '1756', idrol: '1066', correos_adicionales: ['id@biomont.com.pe'] },
            { usuario: 'CONSTANTINO IVAN POMIANO JESUS', correo: 'cpomiano@biomont.com.pe', idusuario: '303', idrol: '1065', correos_adicionales: ['id@biomont.com.pe', 'mmiranda@biomont.com.pe'] },
            { usuario: 'CESAR ENRIQUE SUNCION SOSA', correo: 'csuncion@biomont.com.pe', idusuario: '290', idrol: '1069', correos_adicionales: [''] },
            { usuario: 'DENIS BETTY ALAYO MERGILDO', correo: 'dalayo@biomont.com.pe', idusuario: '276', idrol: '1116', correos_adicionales: ['adurand@Biomont.com.pe'] },
        ];

        let obj = {
            id_formulario: document.getElementsByName("id")[0],
            main_form: document.getElementsByName("main_form")[0],
            subtipo: document.getElementById('subtype'),
            iduser: document.getElementsByName("nluser")[0],
            idrol: document.getElementsByName("nlrole")[0],
            inactivo_fs: document.getElementById('isinactive_fs'),
            bloque_detalle: document.getElementsByClassName('bdtabblock')[0],
            subsidiaria_fs: document.getElementById('subsidiary_fs'),
            input_nombre_formulario: document.getElementsByName('inpt_customform')[0],
            input_codigo_articulo: document.getElementById('itemid'),
            input_descripcion_articulo: document.getElementsByName('displayname')[0],
            input_descripcion_compra: document.getElementById('purchasedescription'),
            input_descripcion_venta: document.getElementById('salesdescription'),
            input_descripcion_stock: document.getElementById('stockdescription'),
            input_linea_articulo: document.getElementsByName('custitem3_display')[0],

            input_estado_aprobacion: document.getElementsByName('custitem_articulo_estado_creacion')[0],
            input_nombre_revisador: document.getElementsByName('custitem_articulo_revisador')[0],
            input_nombre_aprobador: document.getElementsByName('custitem_articulo_aprobador')[0],

            tipo_unidades_name: document.getElementsByName('inpt_unitstype')[0],
            tipo_unidades: document.getElementById('inpt_unitstype2') || document.getElementById('inpt_unitstype1'),
            tipo_unidades_flecha: document.getElementById('inpt_unitstype2_arrow') || document.getElementById('inpt_unitstype1_arrow'),
            unidad_stock: document.getElementsByName('inpt_saleunit')[0] || document.getElementsByName('inpt_purchaseunit')[0],
            venta: document.getElementById('inpt_saleunit3') || document.getElementById('inpt_saleunit2'),
            venta_flecha: document.getElementById('inpt_saleunit3_arrow') || document.getElementById('inpt_saleunit2_arrow'),
            consumo: document.getElementById('inpt_consumptionunit4') || document.getElementById('inpt_consumptionunit3') || document.getElementById('inpt_consumptionunit5'),
            consumo_flecha: document.getElementById('inpt_consumptionunit4_arrow') || document.getElementById('inpt_consumptionunit3_arrow') || document.getElementById('inpt_consumptionunit5_arrow'),
            popup_lista_lineas: document.getElementById('custitem3_popup_list'),
            var_campos_desactivar_VARIOS: () => {
                obj.bloque_detalle.setAttribute('style', 'pointer-events: none;');
                obj.subsidiaria_fs.setAttribute('style', 'pointer-events: none;');
                obj.inactivo_fs.setAttribute('style', 'pointer-events: none;');
                obj.input_codigo_articulo.setAttribute('style', 'pointer-events: none;');
                obj.tipo_unidades.setAttribute('style', 'pointer-events: none;');
                obj.tipo_unidades_flecha.setAttribute('style', 'display: none;');
                obj.consumo.setAttribute('style', 'pointer-events: none;');
                obj.consumo_flecha.setAttribute('style', 'display: none;');
            },
            var_campos_desactivar_ACTIVOFIJO: () => {
                obj.bloque_detalle.setAttribute('style', 'pointer-events: none;');
                obj.subsidiaria_fs.setAttribute('style', 'pointer-events: none;');
                obj.inactivo_fs.setAttribute('style', 'pointer-events: none;');
                obj.input_codigo_articulo.setAttribute('style', 'pointer-events: none;');
                obj.tipo_unidades.setAttribute('style', 'pointer-events: none;');
                obj.tipo_unidades_flecha.setAttribute('style', 'display: none;');
                obj.consumo.setAttribute('style', 'pointer-events: none;');
                obj.consumo_flecha.setAttribute('style', 'display: none;');
            },
            campos_autocompletar: {
                subsidiaria: document.getElementsByName('subsidiary')[0],
                subsidiaria_principal: document.getElementById('row_subsidiary5_0') || document.getElementById('row_subsidiary6_0') || document.getElementById('row_subsidiary4_0'),
                subsidiaria_biomont: document.getElementById('row_subsidiary5_1') || document.getElementById('row_subsidiary6_1') || document.getElementById('row_subsidiary4_1'),
                inactivo: document.getElementById('isinactive_fs_inp'),
                categoria_costo: document.getElementsByName('inpt_costcategory')[0],
                categoria_costo_hddn: document.getElementById('hddn_costcategory9') || document.getElementById('hddn_costcategory8') || document.getElementById('hddn_costcategory7') || document.getElementById('hddn_costcategory6'),
                categoria_costo_indx: document.getElementById('indx_costcategory9') || document.getElementById('indx_costcategory8') || document.getElementById('indx_costcategory7') || document.getElementById('indx_costcategory6'),
                consumo: document.getElementById('custitem_ns_pe_inv_usa_6061_fs_inp'),
                cuenta_variacion: document.getElementById('custitem_ns_pe_variat_acc_61_display'),
                cuenta_variacion_hddn: document.getElementById('hddn_custitem_ns_pe_variat_acc_61_fs'),
                unidad_medida: document.getElementById('custitem_ns_pe_unit_med_display'),
                unidad_medida_hddn: document.getElementById('hddn_custitem_ns_pe_unit_med_fs'),
                cod_unidad_medida: document.getElementById('custitem_ns_pe_cod_unit_med'),
                cuenta_ingresos: document.getElementsByName('incomeaccount_display')[0] ? document.getElementsByName('incomeaccount_display')[0] : '',
                cuenta_ingresos_hddn: document.getElementById('hddn_incomeaccount_fs'),
                cuenta_gastos: document.getElementsByName('expenseaccount_display')[0] ? document.getElementsByName('expenseaccount_display')[0] : '',
                cuenta_gastos_hddn: document.getElementById('hddn_expenseaccount_fs'),
                programa_fiscal: document.getElementsByName('inpt_taxschedule')[0],
                programa_fiscal_hddn: document.getElementById('hddn_taxschedule15') || document.getElementById('hddn_taxschedule14') || document.getElementById('hddn_taxschedule17') || document.getElementById('hddn_taxschedule21') || document.getElementById('hddn_taxschedule13') || document.getElementById('hddn_taxschedule16') || document.getElementById('hddn_taxschedule20') || document.getElementById('hddn_taxschedule18') || document.getElementById('hddn_taxschedule22'),
                programa_fiscal_indx: document.getElementById('indx_taxschedule15') || document.getElementById('indx_taxschedule14') || document.getElementById('indx_taxschedule17') || document.getElementById('indx_taxschedule21') || document.getElementById('indx_taxschedule13') || document.getElementById('indx_taxschedule16') || document.getElementById('indx_taxschedule20') || document.getElementById('indx_taxschedule18') || document.getElementById('indx_taxschedule22')
            },
            llenar_campos: (linea, unidad) => {
                let _unidad_medida = '';
                let _unidad_medida_hddn = '';
                let _cod_unidad_medida = '';
                switch (unidad) {
                    case 'UNIDADES':
                    case 'CANTIDAD':
                        _unidad_medida = 'Unidad (Bienes)';
                        _unidad_medida_hddn = '58';
                        _cod_unidad_medida = 'NIU';
                        break;
                    case 'LITROS':
                    case 'VOLUMEN':
                        _unidad_medida = 'Litro';
                        _unidad_medida_hddn = '29';
                        _cod_unidad_medida = 'LTR';
                        break;
                    case 'KILOS':
                    case 'PESO':
                        _unidad_medida = 'Kilogramo';
                        _unidad_medida_hddn = '23';
                        _cod_unidad_medida = 'KGM';
                        break;
                    case 'METROS':
                    case 'LONGITUD':
                        _unidad_medida = 'Metro';
                        _unidad_medida_hddn = '31';
                        _cod_unidad_medida = 'MTR';
                        break;
                    default:
                        break;
                }

                data_base.find(elemento => {
                    if (elemento.linea === linea) {
                        obj.campos_autocompletar.subsidiaria.value = data_base.subsidiaria;
                        obj.campos_autocompletar.subsidiaria_principal.classList.remove('dropdownSelected');
                        obj.campos_autocompletar.subsidiaria_principal.classList.add('dropdownNotSelected');
                        obj.campos_autocompletar.subsidiaria_biomont.classList.remove('dropdownNotSelected');
                        obj.campos_autocompletar.subsidiaria_biomont.classList.add('dropdownSelected');
                        obj.campos_autocompletar.inactivo.checked = data_base.inactivo;
                        obj.campos_autocompletar.consumo.checked = data_base.consumo;
                        obj.campos_autocompletar.categoria_costo.value = data_base.categoria_costo;
                        obj.campos_autocompletar.categoria_costo_hddn.value = data_base.categoria_costo_hddn;
                        obj.campos_autocompletar.categoria_costo_indx.value = data_base.categoria_costo_indx;
                        obj.campos_autocompletar.unidad_medida.value = _unidad_medida;
                        obj.campos_autocompletar.unidad_medida_hddn.value = _unidad_medida_hddn;
                        obj.campos_autocompletar.cod_unidad_medida.value = _cod_unidad_medida;
                        obj.campos_autocompletar.programa_fiscal.value = data_base.programa_fiscal;
                        obj.campos_autocompletar.programa_fiscal_hddn.value = data_base.programa_fiscal_hddn;
                        obj.campos_autocompletar.programa_fiscal_indx.value = data_base.programa_fiscal_indx;
                        if (linea === 'ACTIVO FIJO') {
                            obj.campos_autocompletar.cuenta_ingresos.value = data_base.cuenta_ingresos; //adicional
                            obj.campos_autocompletar.cuenta_ingresos_hddn.value = data_base.cuenta_ingresos_hddn; //adicional
                        }
                    }
                })

                /*switch(linea){
                    case 'VARIOS':
                        obj.campos_autocompletar.subsidiaria.value=data_base.subsidiaria;
                        obj.campos_autocompletar.subsidiaria_principal.classList.remove('dropdownSelected');
                        obj.campos_autocompletar.subsidiaria_principal.classList.add('dropdownNotSelected');
                        obj.campos_autocompletar.subsidiaria_biomont.classList.remove('dropdownNotSelected');
                        obj.campos_autocompletar.subsidiaria_biomont.classList.add('dropdownSelected');
                        obj.campos_autocompletar.inactivo.checked=data_base.inactivo;
                        obj.campos_autocompletar.consumo.checked=data_base.consumo;
                        obj.campos_autocompletar.categoria_costo.value=data_base.categoria_costo;
                        obj.campos_autocompletar.categoria_costo_hddn.value=data_base.categoria_costo_hddn;
                        obj.campos_autocompletar.categoria_costo_indx.value=data_base.categoria_costo_indx;
                        obj.campos_autocompletar.unidad_medida.value=_unidad_medida;
                        obj.campos_autocompletar.unidad_medida_hddn.value=_unidad_medida_hddn;
                        obj.campos_autocompletar.cod_unidad_medida.value=_cod_unidad_medida;
                        obj.campos_autocompletar.programa_fiscal.value=data_base.programa_fiscal;
                        obj.campos_autocompletar.programa_fiscal_hddn.value=data_base.programa_fiscal_hddn;
                        obj.campos_autocompletar.programa_fiscal_indx.value=data_base.programa_fiscal_indx;
                    break;
                    case 'ACTIVO FIJO':
                        obj.campos_autocompletar.subsidiaria.value=data_base.ACTIVO_FIJO.subsidiaria;
                        obj.campos_autocompletar.subsidiaria_principal.classList.remove('dropdownSelected');
                        obj.campos_autocompletar.subsidiaria_principal.classList.add('dropdownNotSelected');
                        obj.campos_autocompletar.subsidiaria_biomont.classList.remove('dropdownNotSelected');
                        obj.campos_autocompletar.subsidiaria_biomont.classList.add('dropdownSelected');
                        obj.campos_autocompletar.inactivo.checked=data_base.ACTIVO_FIJO.inactivo;
                        obj.campos_autocompletar.consumo.checked=data_base.ACTIVO_FIJO.consumo;
                        obj.campos_autocompletar.categoria_costo.value=data_base.ACTIVO_FIJO.categoria_costo;
                        obj.campos_autocompletar.categoria_costo_hddn.value=data_base.ACTIVO_FIJO.categoria_costo_hddn;
                        obj.campos_autocompletar.categoria_costo_indx.value=data_base.ACTIVO_FIJO.categoria_costo_indx;
                        obj.campos_autocompletar.unidad_medida.value=_unidad_medida;
                        obj.campos_autocompletar.unidad_medida_hddn.value=_unidad_medida_hddn;
                        obj.campos_autocompletar.cod_unidad_medida.value=_cod_unidad_medida;
                        obj.campos_autocompletar.cuenta_ingresos.value=data_base.ACTIVO_FIJO.cuenta_ingresos; //adicional
                        obj.campos_autocompletar.cuenta_ingresos_hddn.value=data_base.ACTIVO_FIJO.cuenta_ingresos_hddn; //adicional
                        obj.campos_autocompletar.programa_fiscal.value=data_base.ACTIVO_FIJO.programa_fiscal;
                        obj.campos_autocompletar.programa_fiscal_hddn.value=data_base.ACTIVO_FIJO.programa_fiscal_hddn;
                        obj.campos_autocompletar.programa_fiscal_indx.value=data_base.ACTIVO_FIJO.programa_fiscal_indx;
                    break;
                }*/

                switch (obj.subtipo.value) {
                    case 'Sale': //Venta
                        obj.var_campos_desactivar_VARIOS();
                        break;
                    case 'Resale': // Reventa
                        obj.var_campos_desactivar_ACTIVOFIJO();
                        break;
                }

            },
            funcReplica: (event, elementMain, arrayElements) => {
                document.getElementsByName(elementMain)[0].addEventListener(event, (e) => {
                    arrayElements.forEach((arr) => {
                        obj.convertirMayuscula(elementMain);
                        obj.convertirMayuscula(arr);
                        document.getElementsByName(arr)[0].value = document.getElementsByName(elementMain)[0].value;
                    })
                })
            },
            replicaDescripcion: () => {
                switch (obj.subtipo.value) {
                    case 'Sale': //Venta
                        ['keyup', 'blur'].forEach((ev) => { obj.funcReplica(ev, 'displayname', ['salesdescription']) });
                        break;
                    case 'Resale': //Reventa
                        ['keyup', 'blur'].forEach((ev) => { obj.funcReplica(ev, 'displayname', ['purchasedescription', 'salesdescription', 'stockdescription']) });
                        break;
                }
            },
            getNumeroCorrelativo: (num, nomenclatura) => {
                if (nomenclatura.length == 3)
                    return `${nomenclatura}${(+num + 1).toString().padStart(7, 0)}`;
                else
                    return `${nomenclatura}${(+num + 1).toString().padStart(8, 0)}`;
            },
            getCorrelativoLineaArticulo: () => {
                if (obj.popup_lista_lineas) {
                    obj.popup_lista_lineas.addEventListener('click', () => {
                        setTimeout(() => {
                            if (document.getElementById('inner_popup_div')) {
                                let type = '';
                                switch (obj.subtipo.value) {
                                    case 'Sale': //Venta
                                        type = 'VARIOS';
                                        break;
                                    case 'Resale': // Reventa
                                        type = 'ACTIVO FIJO';
                                        break;
                                }
                                var array_tr = [...document.getElementById('inner_popup_div').childNodes[0].childNodes[1].children];
                                let filtrado = array_tr.filter((elemento) => {
                                    return [type].includes(elemento.cells[1].innerText)
                                });
                                document.querySelector('#inner_popup_div table tbody').remove();
                                document.querySelector('#inner_popup_div table').appendChild(document.createElement('tbody'));
                                filtrado.forEach(elemento => {
                                    document.querySelector('#inner_popup_div table tbody').appendChild(elemento);
                                });
                                array_tr = [...document.getElementById('inner_popup_div').childNodes[0].childNodes[1].children];
                                array_tr.forEach((elemento, indice) => {
                                    elemento.addEventListener('click', () => {
                                        if (obj.tipo_unidades_name.value === " ") {
                                            alert('Seleccione la unidad');
                                            obj.input_linea_articulo.value = '';
                                            return false;
                                        }
                                        obj.display_blocker("Cargando información...");
                                        const dato = {
                                            linea: elemento.childNodes[3].childNodes[1].innerText.trim(),
                                            unidad: obj.tipo_unidades_name.value.trim()
                                        };
                                        fetch(BASE_URL + '/correlativoarticulo/getCorrelativoLineaArticulo', {
                                            method: "POST",
                                            headers: {
                                                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                                            },
                                            body: JSON.stringify({ "dato": dato })
                                        })
                                            .then((response) => response.json())
                                            .then((data) => {
                                                document.getElementById('id-blocker').style.display = 'none';
                                                document.getElementById('id-popup').style.display = 'none';
                                                data_base.forEach(elemento => {
                                                    if (dato.linea === elemento.linea) {
                                                        obj.input_codigo_articulo.value = obj.getNumeroCorrelativo(data.num, data.nomen);
                                                        obj.llenar_campos(dato.linea, dato.unidad);
                                                        obj.input_descripcion_articulo.focus();
                                                    }
                                                })
                                                /*document.getElementById('id-blocker').style.display='none';
                                                document.getElementById('id-popup').style.display='none';
                                                arrayLineas.forEach(linea=>{
                                                    if(dato.linea === linea){
                                                        obj.input_codigo_articulo.value = obj.getNumeroCorrelativo(data.num,data.nomen);
                                                        obj.llenar_campos(dato.linea,dato.unidad);
                                                        obj.input_descripcion_articulo.focus();
                                                    }
                                                });*/
                                            })
                                            .catch(error => console.error(error));
                                    });
                                });
                            }
                        }, 1100)
                    });
                }
            },
            display_blocker: (mensaje) => {
                let blocker = document.createElement('div');
                blocker.id = 'id-blocker';
                blocker.style.position = 'fixed';
                blocker.style.zIndex = '20000';
                blocker.style.top = '0px';
                blocker.style.left = '0px';
                blocker.style.height = '100%';
                blocker.style.width = '100%';
                blocker.style.margin = "5px 0px";
                blocker.style.backgroundColor = "#E0E0E0";
                blocker.style.opacity = "0.6";

                document.getElementsByTagName("body")[0].insertAdjacentElement("afterend", blocker);

                let popup = document.createElement('div');
                popup.id = 'id-popup';
                popup.style.position = 'fixed';
                popup.style.zIndex = '20001';
                popup.style.top = '40%';
                popup.style.left = '40%';

                let table = document.createElement('table');
                //table.classList.add("uir-popup");
                table.classList.add("uir-popup-header");
                table.width = '250';
                table.cellspacing = '0';
                table.cellpadding = '0';
                let fila_title = document.createElement('tr');
                let fila_body = document.createElement('tr');
                let celda_title = document.createElement('td');
                let celda_body = document.createElement('td');
                celda_body.style.backgroundColor = "white";
                celda_body.height = "50px";
                let mensaje_title = document.createElement('span');
                let mensaje_body = document.createElement('span');
                mensaje_title.innerText = "Mensaje informativo";
                mensaje_title.style.fontsize = "9px";
                mensaje_body.style.color = "#2E86C1";
                mensaje_body.innerText = mensaje;
                mensaje_body.style.fontsize = "9px";
                mensaje_body.style.color = "black";
                let img = document.createElement("img");
                img.src = URL_IMG_LOADING_NS + ID_IMG_LOADING_NS;
                img.style.width = "20px";
                celda_title.appendChild(mensaje_title);
                celda_body.appendChild(mensaje_body);
                celda_body.appendChild(img);
                fila_title.appendChild(celda_title);
                fila_body.appendChild(celda_body);
                table.appendChild(fila_title);
                table.appendChild(fila_body);

                popup.appendChild(table);

                document.getElementsByTagName("body")[0].insertAdjacentElement("afterend", popup);
            },
            enviar_correo: (nombre_ejecutor, email_ejecutor) => {
                obj.main_form.addEventListener("submit", (e) => {
                    e.preventDefault();

                    obj.display_blocker("Enviando email...");

                    const element_email = document.querySelector('#custitem21_displayval a');
                    //element.addEventListener('mouseover', function() {
                    //  console.log('Event triggered');
                    //});
                    const event = new MouseEvent('mouseover', {
                        'view': window,
                        'bubbles': true,
                        'cancelable': true
                    });

                    setTimeout(element_email.dispatchEvent(event), 1000);
                    setTimeout(() => {

                        let dato = {
                            id_formulario: obj.id_formulario.value,
                            codigo_articulo: obj.input_codigo_articulo.value,
                            descripcion_articulo: obj.input_descripcion_articulo.value,
                            nombre_ejecutor: nombre_ejecutor  /*obj.input_nombre_aprobador.value, */,
                            email_ejecutor: email_ejecutor /*document.querySelector('#email_fs a').innerHTML,*/,
                            linea_articulo: obj.input_linea_articulo.value
                        }

                        fetch(BASE_URL + "/correlativoarticulo/sendEmailNotification", {
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                            },
                            body: JSON.stringify({ "dato": dato })
                        })
                            .then((response) => response.json())
                            .then((data) => {

                                if (data.est == 0) {
                                    obj.var_campos.inactivo_inp.removeAttribute("checked");
                                    switch (obj.subtipo.value) {
                                        case 'Sale': //Venta
                                            document.getElementsByName('salesdescription')[0].value = document.getElementsByName('salesdescription')[0].value + ' ';
                                            break;
                                        case 'Resale': // Reventa
                                            document.getElementsByName('salesdescription')[0].value = document.getElementsByName('salesdescription')[0].value + ' ';
                                            break;
                                    }

                                    alert("El correo se envió correctamente");
                                    obj.main_form.submit();
                                    return true;

                                } else {
                                    alert("Hubo un error en el envío de correo");
                                    return false;
                                }
                            })
                            .catch(error => console.error(error));

                    }, 3000);

                });
            },
            actualiza_correlativo: () => {
                obj.main_form.addEventListener("submit", (e) => {
                    e.preventDefault();

                    var array_validation = [];

                    switch (obj.subtipo.value) {
                        case 'Sale': //Venta
                            array_validation.push(obj.campos_autocompletar.subsidiaria); //subsidiaria
                            array_validation.push(obj.input_codigo_articulo); //codigo
                            array_validation.push(obj.input_linea_articulo); //linea
                            array_validation.push(obj.unidad_stock); //Unidad de stock
                            array_validation.push(obj.input_descripcion_articulo); //Descripcion del articulo
                            array_validation.push(obj.input_descripcion_venta); //Descripcion de la venta
                            break;
                        case 'Resale': // Reventa
                            array_validation.push(obj.campos_autocompletar.subsidiaria); //subsidiaria
                            array_validation.push(obj.input_codigo_articulo); //codigo
                            array_validation.push(obj.input_linea_articulo); //linea
                            array_validation.push(obj.unidad_stock); //Unidad de stock
                            array_validation.push(obj.input_descripcion_articulo); //Descripcion del articulo
                            array_validation.push(obj.input_descripcion_compra); //Descripcion de la compra
                            array_validation.push(obj.input_descripcion_venta); //Descripcion de la venta
                            array_validation.push(obj.input_descripcion_stock); //Descripcion de la stock
                            break;
                    }

                    var new_array_validation = [];

                    [...array_validation].filter((elemento, index) => {

                        if (elemento.value === "" || elemento.value === " " || elemento.value === "1") {

                            var new_index = '';

                            switch (obj.subtipo.value) {
                                case 'Sale': //Venta
                                    switch (index) {
                                        case 0:
                                            new_index = 'Subsidiaria BIOMONT';
                                            break;
                                        case 1:
                                            new_index = 'Codigo';
                                            break;
                                        case 2:
                                            new_index = 'Linea';
                                            break;
                                        case 3:
                                            new_index = 'Unidad de Stock';
                                            break;
                                        case 4:
                                            new_index = 'Descripcion de Articulo';
                                            break;
                                        case 5:
                                            new_index = 'Descripcion de Venta';
                                            break;
                                    }

                                    new_array_validation.push(new_index)
                                    break;

                                case 'Resale': //Reventa
                                    switch (index) {
                                        case 0:
                                            new_index = 'Subsidiaria BIOMONT';
                                            break;
                                        case 1:
                                            new_index = 'Codigo';
                                            break;
                                        case 2:
                                            new_index = 'Linea';
                                            break;
                                        case 3:
                                            new_index = 'Unidad de Stock';
                                            break;
                                        case 4:
                                            new_index = 'Descripcion de Articulo';
                                            break;
                                        case 5:
                                            new_index = 'Descripcion de Compra';
                                            break;
                                        case 6:
                                            new_index = 'Descripcion de Venta';
                                            break;
                                        case 7:
                                            new_index = 'Descripcion de Stock';
                                            break;
                                    }

                                    new_array_validation.push(new_index)
                                    break;
                            }
                        }
                    });

                    if (new_array_validation.length !== 0) {

                        alert(`Por favor ingrese los campos obligatorios:\n-${new_array_validation.join('\n-')}`)
                        return false;

                    } else {

                        obj.display_blocker("Actualizando correlativo...");

                        let dato = {
                            nomenclatura: obj.input_codigo_articulo.value.substring(0, obj.input_codigo_articulo.value.indexOf('0')),
                            correlativo_vista: +obj.input_codigo_articulo.value.replace(/[^0-9]+/g, "")
                        }

                        fetch(BASE_URL + "/correlativoarticulo/updateCorrelativoLineaArticulo", {
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                            },
                            body: JSON.stringify({ "dato": dato })
                        })
                            .then((response) => response.json())
                            .then((data) => {
                                if (data.res) {

                                    alert("Correlativo actualizado correctamente");
                                    obj.main_form.submit();
                                    return true;

                                } else {

                                    alert("Hubo un error en la actualizacion del correlativo");
                                    return false;

                                }
                            })
                            .catch(error => console.error(error));

                    }

                });
            },
            setBotonFirma: (input_nombre_ejecutor, nombre_boton) => {
                const boton = document.createElement('button');
                boton.id = 'id-boton-' + nombre_boton;
                boton.innerHTML = 'Firmar';
                boton.onclick = () => {
                    obj.enviar_correo();
                };
                const salto_linea = document.createElement('br');
                input_nombre_ejecutor.insertAdjacentElement('afterend', salto_linea);
                salto_linea.insertAdjacentElement('afterend', boton);
            },
            msj_error: {
                tb_td_ref_con_top: document.getElementsByTagName('tr')[0],
                tb_td_ref_con_bottom: document.getElementsByClassName("bdtabblock")[0],
                tr_con_top: document.createElement("tr"),
                td_con_top: document.createElement("td"),
                td_con_bottom: document.createElement("td"),
                sp_con_top: document.createElement("span"),
                sp_con_bottom: document.createElement("span"),
                link_conex_top: document.createElement("a"),
                link_conex_bottom: document.createElement("a"),
            },
            msj_conexion: () => {
                obj.msj_error.sp_con_top.id = "txt_con_top";
                obj.msj_error.sp_con_top.style.fontSize = "14px";
                obj.msj_error.sp_con_top.style.fontWeight = "bold";
                obj.msj_error.td_con_top.style.backgroundColor = "#ffff61";
                obj.msj_error.tr_con_top.appendChild(obj.msj_error.td_con_top);
                obj.msj_error.td_con_top.appendChild(obj.msj_error.sp_con_top);

                obj.msj_error.tb_td_ref_con_top.insertAdjacentElement("afterend", obj.msj_error.td_con_top);

                let texto_conex_top = document.getElementById("txt_con_top");
                obj.msj_error.link_conex_top.href = BASE_URL;
                obj.msj_error.link_conex_top.target = "_blank";
                obj.msj_error.link_conex_top.innerText = "Servidor Biomont";
                obj.msj_error.link_conex_top.style.fontSize = "14px";

                texto_conex_top.innerHTML = "<span style='color:#FC1313;'>Sin Conexión con el servidor. Click aqui: </span>";
                texto_conex_top.insertAdjacentElement("afterend", obj.msj_error.link_conex_top);

                obj.msj_error.sp_con_bottom.id = "txt_con_bottom";
                obj.msj_error.sp_con_bottom.style.fontSize = "14px";
                obj.msj_error.sp_con_bottom.style.fontWeight = "bold";
                obj.msj_error.td_con_bottom.style.backgroundColor = "#ffff61";
                obj.msj_error.td_con_bottom.appendChild(obj.msj_error.sp_con_bottom);

                obj.msj_error.tb_td_ref_con_bottom.insertAdjacentElement("afterend", obj.msj_error.td_con_bottom);

                let texto_conex_bottom = document.getElementById("txt_con_bottom");
                obj.msj_error.link_conex_bottom.href = BASE_URL;
                obj.msj_error.link_conex_bottom.target = "_blank";
                obj.msj_error.link_conex_bottom.innerText = "Servidor Biomont";
                obj.msj_error.link_conex_bottom.style.fontSize = "14px";

                texto_conex_bottom.innerHTML = "<span style='color:#FC1313;'>Sin Conexión con el servidor. Click aqui: </span>";
                texto_conex_bottom.insertAdjacentElement("afterend", obj.msj_error.link_conex_bottom);
            },
            convertirMayuscula: (elemento) => {
                document.getElementsByName(elemento)[0].addEventListener('input', () => {
                    let start = document.getElementsByName(elemento)[0].selectionStart;
                    let end = document.getElementsByName(elemento)[0].selectionEnd;
                    document.getElementsByName(elemento)[0].value = document.getElementsByName(elemento)[0].value.toUpperCase();
                    document.getElementsByName(elemento)[0].setSelectionRange(start, end);
                });
            },
            conexion: () => {
                fetch(BASE_URL + "/correlativoarticulo/index")
                    .then((response) => response.json())
                    .then((data) => {

                        if (data.con == 'ok') {

                            obj.replicaDescripcion();

                            obj.getCorrelativoLineaArticulo();

                            obj.actualiza_correlativo();

                            obj.tipo_unidades_name.addEventListener('click', () => {
                                obj.input_linea_articulo.value = "";
                            });


                            if (obj.input_nombre_formulario) {
                                obj.input_nombre_formulario.setAttribute('style', 'pointer-events: none;');
                            }

                            obj.input_linea_articulo.setAttribute('style', 'pointer-events: none;');

                            switch (obj.subtipo.value) {
                                case 'Sale': //Venta
                                    obj.input_estado_aprobacion.value = 'PENDIENTE';
                                    obj.input_estado_aprobacion.setAttribute('style', 'pointer-events: none;');
                                    obj.input_nombre_revisador.value = '';
                                    obj.input_nombre_revisador.setAttribute('style', 'pointer-events: none;');
                                    obj.input_nombre_aprobador.value = '';
                                    obj.input_nombre_aprobador.setAttribute('style', 'pointer-events: none;');
                                    break;
                                case 'Resale': // Reventa
                                    obj.input_estado_aprobacion.value = 'PENDIENTE';
                                    obj.input_estado_aprobacion.setAttribute('style', 'pointer-events: none;');
                                    obj.input_nombre_revisador.value = '';
                                    obj.input_nombre_revisador.setAttribute('style', 'pointer-events: none;');
                                    obj.input_nombre_aprobador.value = '';
                                    obj.input_nombre_aprobador.setAttribute('style', 'pointer-events: none;');
                                    break;
                            }
                        }

                    })
                    .catch(error => {
                        console.error(error);

                        obj.msj_conexion();

                    });
            }
        }

        if (obj.id_formulario.value === "") {

            console.log("Guardar");

            obj.conexion();

        } else {

            console.log("Editar");
            console.log(obj.idrol.value);

            switch (obj.idrol.value) {
                case '1120': //BIO_ROL_CREACION_ARTICULO
                    console.log('BIO_ROL_CREACION_ARTICULO');
                    break;
                case '1076': //BIO_ROL_CALIDAD
                    console.log('BIO_ROL_CALIDAD');
                    break;
                case '1090': //BIO_ROL_OPERACIONES_PLANTA_ASISTENTE
                    console.log('BIO_ROL_OPERACIONES_PLANTA_ASISTENTE');
                    break;
                case '1066': //BIO_ROL_ID
                    console.log('BIO_ROL_ID');
                    break;
                case '1065': //BIO_ROL_PRODUCCION
                    console.log('BIO_ROL_PRODUCCION');
                    break;
                case '1069': //BIO_ROL_ALMACEN
                    console.log('BIO_ROL_ALMACEN');
                    break;
            }

            obj.input_estado_aprobacion.setAttribute('style', 'pointer-events: none;');
            obj.input_nombre_revisador.setAttribute('style', 'pointer-events: none;');
            obj.input_nombre_aprobador.setAttribute('style', 'pointer-events: none;');


            if (obj.input_estado_aprobacion.value === 'PENDIENTE' && obj.input_nombre_revisador.value === '' && obj.input_nombre_aprobador.value === '') {

                obj.setBotonFirma(obj.input_nombre_revisador, 'revisar');

            } else if (obj.input_estado_aprobacion.value === 'PENDIENTE' && obj.input_nombre_revisador.value !== '' && obj.input_nombre_aprobador.value === '') {

                obj.setBotonFirma(obj.input_nombre_aprobador, 'aprobar');

            }

            /*switch(obj.subtipo.value){
                case 'Sale': //Venta
                if(document.getElementsByName('salesdescription')[0].value.lastIndexOf(' ')!==document.getElementsByName('salesdescription')[0].value.length-1){
                    obj.setBotonFirmaAprobado();
                }
                break;
                case 'Resale': // Reventa
                if(document.getElementsByName('salesdescription')[0].value.lastIndexOf(' ')!==document.getElementsByName('salesdescription')[0].value.length-1){
                obj.setBotonFirmaAprobado();
                }
                break;
            }*/


            /*switch(obj.subtipo.value){
            case 'Sale': //Venta
                if(document.getElementsByName('salesdescription')[0].value!==''){
                const aprobador_sesion = document.querySelector('div#uif38 span');
                
                const aprobador = document.getElementsByName('inpt_custitem24')[0];
                const aprobador_hddn = document.getElementById('hddn_custitem248') || document.getElementById('hddn_custitem247') || document.getElementById('hddn_custitem246') || document.getElementById('hddn_custitem245');
                const aprobador_indx = document.getElementById('indx_custitem248') || document.getElementById('indx_custitem247') || document.getElementById('indx_custitem246') || document.getElementById('indx_custitem245');
                const aprobador_flecha = document.getElementById('inpt_custitem246_arrow') || document.getElementById('inpt_custitem245_arrow') || document.getElementById('inpt_custitem247_arrow');
                const aprobador_popup = document.querySelector('#custitem24_fs span.uir-field-widget');
                
                const accion_aprobar = document.getElementsByName('inpt_custitem25')[0];
                accion_aprobar.value = 'APROBADO';
                const accion_aprobar_hddn = document.getElementById('hddn_custitem257') || document.getElementById('hddn_custitem256') || document.getElementById('hddn_custitem255') || document.getElementById('hddn_custitem254');
                accion_aprobar_hddn.value = '2';
                const accion_aprobar_indx = document.getElementById('indx_custitem257') || document.getElementById('indx_custitem256') || document.getElementById('indx_custitem255') || document.getElementById('indx_custitem254');
                accion_aprobar_indx.value = '2';
                const accion_aprobar_flecha = document.getElementById('inpt_custitem255_arrow') || document.getElementById('inpt_custitem256_arrow') || document.getElementById('inpt_custitem254_arrow');
                const accion_aprobar_popup = document.querySelector('#custitem25_fs span.uir-field-widget');

                const codigo_articulo = document.getElementsByName('itemid')[0];
                
                switch(aprobador_sesion.innerText){
                    case 'JUAN ROBERTO PEÑA MALASQUEZ':
                    aprobador.value = 'ANGELO VILCHEZ MARQUEZ';
                    aprobador.setAttribute('style','pointer-events: none;');
                    aprobador_flecha.setAttribute('style','display: none;');
                    aprobador_popup.setAttribute('style','display: none;');
                    aprobador_hddn.value = '1';
                    aprobador_indx.value = '2';
                    accion_aprobar.setAttribute('style','pointer-events: none;');
                    accion_aprobar_flecha.setAttribute('style','display: none;');
                    accion_aprobar_popup.setAttribute('style','display: none;');
                    //codigo_articulo.setAttribute('style','pointer-events: none;');
                    break;
                    case 'ANGELO VILCHEZ MARQUEZ':
                    aprobador.value = 'ANGELO VILCHEZ MARQUEZ';
                    aprobador.setAttribute('style','pointer-events: none;');
                    aprobador_flecha.setAttribute('style','display: none;');
                    aprobador_popup.setAttribute('style','display: none;');
                    aprobador_hddn.value = '1';
                    aprobador_indx.value = '2';
                    accion_aprobar.setAttribute('style','pointer-events: none;');
                    accion_aprobar_flecha.setAttribute('style','display: none;');
                    accion_aprobar_popup.setAttribute('style','display: none;');
                    //codigo_articulo.setAttribute('style','pointer-events: none;');
                    break;
                    case 'KEVIN MARCEL CELESTINO PUCHOC':
                    aprobador.value = 'KEVIN MARCEL CELESTINO PUCHOC';
                    aprobador.setAttribute('style','pointer-events: none;');
                    aprobador_flecha.setAttribute('style','display: none;');
                    aprobador_popup.setAttribute('style','display: none;');
                    aprobador_hddn.value = '2';
                    aprobador_indx.value = '4';
                    accion_aprobar.setAttribute('style','pointer-events: none;');
                    accion_aprobar_flecha.setAttribute('style','display: none;');
                    accion_aprobar_popup.setAttribute('style','display: none;');
                    //codigo_articulo.setAttribute('style','pointer-events: none;');
                    break;
                    case 'LILIAN ALINA BASUALDO SOTO':
                    aprobador.value = 'LILIAN ALINA BASUALDO SOTO';
                    aprobador.setAttribute('style','pointer-events: none;');
                    aprobador_flecha.setAttribute('style','display: none;');
                    aprobador_popup.setAttribute('style','display: none;');
                    aprobador_hddn.value = '4';
                    aprobador_indx.value = '5';
                    accion_aprobar.setAttribute('style','pointer-events: none;');
                    accion_aprobar_flecha.setAttribute('style','display: none;');
                    accion_aprobar_popup.setAttribute('style','display: none;');
                    //codigo_articulo.setAttribute('style','pointer-events: none;');
                    break;
                }
                }
                break;
            case 'Resale': // Reventa
                if(document.getElementsByName('salesdescription')[0].value!==''){

                const aprobador_sesion = document.querySelector('div#uif38 span');
                
                const aprobador = document.getElementsByName('inpt_custitem24')[0];
                const aprobador_hddn = document.getElementById('hddn_custitem248') || document.getElementById('hddn_custitem247') || document.getElementById('hddn_custitem246') || document.getElementById('hddn_custitem245');
                const aprobador_indx = document.getElementById('indx_custitem248') || document.getElementById('indx_custitem247') || document.getElementById('indx_custitem246') || document.getElementById('indx_custitem245');
                const aprobador_flecha = document.getElementById('inpt_custitem247_arrow') || document.getElementById('inpt_custitem246_arrow') || document.getElementById('inpt_custitem245_arrow');
                const aprobador_popup = document.querySelector('#custitem24_fs span.uir-field-widget');
                
                const accion_aprobar = document.getElementsByName('inpt_custitem25')[0];
                accion_aprobar.value = 'APROBADO';
                const accion_aprobar_hddn = document.getElementById('hddn_custitem257') || document.getElementById('hddn_custitem256') || document.getElementById('hddn_custitem255');
                accion_aprobar_hddn.value = '2';
                const accion_aprobar_indx = document.getElementById('indx_custitem257') || document.getElementById('indx_custitem256') || document.getElementById('indx_custitem255');
                accion_aprobar_indx.value = '2';
                const accion_aprobar_flecha = document.getElementById('inpt_custitem256_arrow') || document.getElementById('inpt_custitem255_arrow') || document.getElementById('inpt_custitem254_arrow');
                const accion_aprobar_popup = document.querySelector('#custitem25_fs span.uir-field-widget');

                const codigo_articulo = document.getElementsByName('itemid')[0];
                
                switch(aprobador_sesion.innerText){
                    case 'JUAN ROBERTO PEÑA MALASQUEZ':
                    aprobador.value = 'ANGELO VILCHEZ MARQUEZ';
                    aprobador.setAttribute('style','pointer-events: none;');
                    aprobador_flecha.setAttribute('style','display: none;');
                    aprobador_popup.setAttribute('style','display: none;');
                    aprobador_hddn.value = '1';
                    aprobador_indx.value = '2';
                    accion_aprobar.setAttribute('style','pointer-events: none;');
                    accion_aprobar_flecha.setAttribute('style','display: none;');
                    accion_aprobar_popup.setAttribute('style','display: none;');
                    //codigo_articulo.setAttribute('style','pointer-events: none;');
                    break;
                    case 'ANGELO VILCHEZ MARQUEZ':
                    aprobador.value = 'ANGELO VILCHEZ MARQUEZ';
                    aprobador.setAttribute('style','pointer-events: none;');
                    aprobador_flecha.setAttribute('style','display: none;');
                    aprobador_popup.setAttribute('style','display: none;');
                    aprobador_hddn.value = '1';
                    aprobador_indx.value = '2';
                    accion_aprobar.setAttribute('style','pointer-events: none;');
                    accion_aprobar_flecha.setAttribute('style','display: none;');
                    accion_aprobar_popup.setAttribute('style','display: none;');
                    //codigo_articulo.setAttribute('style','pointer-events: none;');
                    break;
                    case 'KEVIN MARCEL CELESTINO PUCHOC':
                    aprobador.value = 'KEVIN MARCEL CELESTINO PUCHOC';
                    aprobador.setAttribute('style','pointer-events: none;');
                    aprobador_flecha.setAttribute('style','display: none;');
                    aprobador_popup.setAttribute('style','display: none;');
                    aprobador_hddn.value = '2';
                    aprobador_indx.value = '4';
                    accion_aprobar.setAttribute('style','pointer-events: none;');
                    accion_aprobar_flecha.setAttribute('style','display: none;');
                    accion_aprobar_popup.setAttribute('style','display: none;');
                    //codigo_articulo.setAttribute('style','pointer-events: none;');
                    break;
                    case 'LILIAN ALINA BASUALDO SOTO':
                    aprobador.value = 'LILIAN ALINA BASUALDO SOTO';
                    aprobador.setAttribute('style','pointer-events: none;');
                    aprobador_flecha.setAttribute('style','display: none;');
                    aprobador_popup.setAttribute('style','display: none;');
                    aprobador_hddn.value = '4';
                    aprobador_indx.value = '5';
                    accion_aprobar.setAttribute('style','pointer-events: none;');
                    accion_aprobar_flecha.setAttribute('style','display: none;');
                    accion_aprobar_popup.setAttribute('style','display: none;');
                    //codigo_articulo.setAttribute('style','pointer-events: none;');
                    break;
                }
                }
                break;
            }*/
        }

    }
});