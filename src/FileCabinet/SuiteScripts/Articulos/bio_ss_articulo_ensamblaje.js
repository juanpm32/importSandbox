window.addEventListener("load", (e) => {
  "use strict";
  const BASE_URL = "https://170.239.101.46:8080/bionetsuite_sb";
  const URL_IMG_LOADING_NS = "https://6462530.app.netsuite.com/core/media/media.nl?id=";
  const ID_IMG_LOADING_NS = "18490&c=6462530&h=YP9k6isls_cI8JCK-2WVaaAVhNeKfrsFLLzgJAPUsLZzrQR1&fcts=20220506124019&whence=";

  let obj = {
    id_formulario: document.getElementsByName("id")[0],
    main_form : document.getElementsByName("main_form")[0],
    input_codigo_articulo: document.getElementById('itemid'),
    input_descripcion_articulo: document.getElementsByName('displayname')[0],
    input_nombre_aprobador: document.getElementsByName('inpt_custitem24')[0],
    unidad_stock_principal: document.getElementsByName('inpt_stockunit')[0],
    bloque_contenido: document.getElementsByClassName('bdtabblock')[0],
    subsidiaria: document.getElementById('subsidiary_fs'),
    articulo: document.getElementById('itemid'),
    esinactivo: document.getElementById('isinactive_fs'),
    metodo_costo: document.getElementsByName('inpt_costingmethod')[0],
    tipo_producto: document.getElementById('custitem7_display'),
    tipo_unidades: document.getElementById('inpt_unitstype2') || document.getElementById('inpt_unitstype1'),
    tipo_unidades_flecha: document.getElementById('inpt_unitstype2_arrow') || document.getElementById('inpt_unitstype1_arrow'),
    stock: document.getElementById('inpt_stockunit3') || document.getElementById('inpt_stockunit2'),
    stock_flecha: document.getElementById('inpt_stockunit3_arrow') || document.getElementById('inpt_stockunit2_arrow'),
    venta: document.getElementById('inpt_saleunit4') || document.getElementById('inpt_saleunit3'),
    venta_flecha: document.getElementById('inpt_saleunit4_arrow') || document.getElementById('inpt_saleunit3_arrow'),
    consumo: document.getElementById('inpt_consumptionunit5') || document.getElementById('inpt_consumptionunit4'),
    consumo_flecha: document.getElementById('inpt_consumptionunit5_arrow') || document.getElementById('inpt_consumptionunit4_arrow'),
    almacen: document.getElementById('location_display'),
    almacen_flecha: document.getElementById('parent_actionbuttons_location_fs'),
    linea: document.getElementsByName('custitem3_display')[0],
    var_campos_desactivar: () => {
      obj.bloque_contenido.setAttribute('style','pointer-events: none;');
      obj.subsidiaria.setAttribute('style','pointer-events: none;');
      obj.articulo.setAttribute('style','pointer-events: none;');
      obj.esinactivo.setAttribute('style','pointer-events: none;');
      obj.metodo_costo.setAttribute('style','pointer-events: none;');
      obj.tipo_producto.setAttribute('style','pointer-events: none;');
      obj.tipo_unidades.setAttribute('style','pointer-events: none;');
      obj.tipo_unidades_flecha.setAttribute('style','display: none;');
      //obj.stock.setAttribute('style','pointer-events: none;');
      //obj.stock_flecha.setAttribute('style','display: none;');
      //obj.venta.setAttribute('style','pointer-events: none;');
      //obj.venta_flecha.setAttribute('style','display: none;');
      obj.consumo.setAttribute('style','pointer-events: none;');
      obj.consumo_flecha.setAttribute('style','display: none;');
      obj.almacen.setAttribute('style','pointer-events: none;');
      obj.almacen_flecha.setAttribute('style','pointer-events: none;');
    },
    var_campos: {
      subsidiaria: document.getElementsByName('subsidiary')[0],
      subsidiaria_principal: document.getElementById('row_subsidiary9_0') || document.getElementById('row_subsidiary8_0'),
      subsidiaria_biomont: document.getElementById('row_subsidiary9_1') || document.getElementById('row_subsidiary8_1'),
      inactivo: document.getElementById('isinactive_fs_inp'),
      vigencia: document.getElementById('custitem10_formattedValue'),
      vigencia_hddn: document.getElementById('custitem10'),
      lote_standar: document.getElementById('custitem11_formattedValue'),
      lote_standar_hddn: document.getElementById('custitem11'),
      metodo_calculo_costo: document.getElementsByName('inpt_costingmethod')[0],
      metodo_calculo_costo_hddn: document.getElementById('hddn_costingmethod6'),
      metodo_calculo_costo_indx: document.getElementById('indx_costingmethod6'),
      tipo_producto: document.getElementById('custitem7_display'),
      tipo_producto_hddn: document.getElementById('hddn_custitem7_fs'),
      almacen: document.getElementById('location_display'),
      almacen_hddn: document.getElementById('hddn_location_fs'),
      centro_costo: document.getElementById('class_display'),
      centro_costo_hddn: document.getElementById('hddn_class_fs'),
      soporte_oferta: document.getElementById('offersupport_fs_inp'),
      utiliza_deposito: document.getElementById('usebins_fs_inp'),
      categoria_costo: document.getElementById('inpt_costcategory10'),
      consumo: document.getElementById('custitem_ns_pe_inv_usa_6061_fs_inp'),
      consumo_chk: document.getElementById('custitem_ns_pe_inv_usa_6061_fs'),
      cuenta_compras: document.getElementById('custitem_ns_pe_purchase_acc_60_display'),
      cuenta_compras_hddn: document.getElementById('hddn_custitem_ns_pe_purchase_acc_60_fs'),
      cuenta_variacion: document.getElementById('custitem_ns_pe_variat_acc_61_display'),
      cuenta_variacion_hddn: document.getElementById('hddn_custitem_ns_pe_variat_acc_61_fs'),
      tipo_existencia: document.getElementById('custitem_ns_pe_existen_type_display'),
      tipo_existencia_hddn: document.getElementById('hddn_custitem_ns_pe_existen_type_fs'),
      catalogo_existencia: document.getElementsByName('inpt_custitem_ns_pe_inv_cataog')[0],
      catalogo_existencia_hddn: document.getElementById('hddn_custitem_ns_pe_inv_cataog27') || document.getElementById('hddn_custitem_ns_pe_inv_cataog26') || document.getElementById('hddn_custitem_ns_pe_inv_cataog28'),
      catalogo_existencia_indx: document.getElementById('indx_custitem_ns_pe_inv_cataog27') || document.getElementById('indx_custitem_ns_pe_inv_cataog26') || document.getElementById('indx_custitem_ns_pe_inv_cataog28'),
      metodo_valuacion: document.getElementsByName('inpt_custitem_ns_pe_valuat_method')[0],
      metodo_valuacion_hddn: document.getElementById('hddn_custitem_ns_pe_valuat_method28') || document.getElementById('hddn_custitem_ns_pe_valuat_method27') || document.getElementById('hddn_custitem_ns_pe_valuat_method29'),
      metodo_valuacion_indx: document.getElementById('indx_custitem_ns_pe_valuat_method28') || document.getElementById('indx_custitem_ns_pe_valuat_method27') || document.getElementById('indx_custitem_ns_pe_valuat_method29'),
      unidad_medida: document.getElementById('custitem_ns_pe_unit_med_display'),
      unidad_medida_hddn: document.getElementById('hddn_custitem_ns_pe_unit_med_fs'),
      cod_tipo_existencia: document.getElementById('custitem_ns_pe_cod_existen_type'),
      cod_tipo_existencia_hddn: document.getElementsByName('custitem_ns_pe_cod_existen_type_send')[0],
      cod_inventory_catalog: document.getElementById('custitem_ns_pe_cod_inv_catalog'),
      cod_inventory_catalog_hddn: document.getElementsByName('custitem_ns_pe_cod_inv_catalog_send')[0],
      cod_metodo_valuacion: document.getElementById('custitem_ns_pe_cod_valuat_meth'),
      cod_metodo_valuacion_hddn: document.getElementsByName('custitem_ns_pe_cod_valuat_meth_send')[0],
      cod_unidad_medida: document.getElementById('custitem_ns_pe_cod_unit_med'),
      cod_unidad_medida_hddn: document.getElementsByName('custitem_ns_pe_cod_unit_med_send')[0],
      cod_cubso: document.getElementById('custitem_ns_pe_cod_cubso'),
      cuenta_costo_productos_vendidos: document.getElementsByName('cogsaccount_display')[0],
      cuenta_costo_productos_vendidos_hddn: document.getElementById('hddn_cogsaccount_fs'),
      cuenta_activo: document.getElementsByName('assetaccount_display')[0],
      cuenta_activo_hddn: document.getElementById('hddn_assetaccount_fs'),
      cuenta_ingresos: document.getElementsByName('incomeaccount_display')[0],
      cuenta_ingresos_hddn: document.getElementById('hddn_incomeaccount_fs'),
      cuenta_desviacion_precio: document.getElementsByName('billpricevarianceacct_display')[0],
      cuenta_desviacion_precio_hddn: document.getElementById('hddn_billpricevarianceacct_fs'),
      cuenta_desviacion_cantidad: document.getElementsByName('billqtyvarianceacct_display')[0],
      cuenta_desviacion_cantidad_hddn: document.getElementById('hddn_billqtyvarianceacct_fs'),
      cuenta_variacion_tipo_cambio: document.getElementsByName('billexchratevarianceacct_display')[0],
      cuenta_variacion_tipo_cambio_hddn: document.getElementById('hddn_billexchratevarianceacct_fs'),
      cuenta_rechazo: document.getElementsByName('scrapacct_display')[0],
      cuenta_rechazo_hddn: document.getElementById('hddn_scrapacct_fs'),
      cuenta_wip: document.getElementsByName('wipacct_display')[0],
      cuenta_wip_hddn: document.getElementById('hddn_wipacct_fs'),
      cuenta_desviacion_desensamblaje: document.getElementsByName('unbuildvarianceaccount_display')[0],
      cuenta_desviacion_desensamblaje_hddn: document.getElementById('hddn_unbuildvarianceaccount_fs'),
      programa_fiscal: document.getElementsByName('inpt_taxschedule')[0],
      programa_fiscal_hddn: document.getElementById('hddn_taxschedule29') || document.getElementById('hddn_taxschedule28') || document.getElementById('hddn_taxschedule30'),
      programa_fiscal_indx: document.getElementById('indx_taxschedule29') || document.getElementById('indx_taxschedule28') || document.getElementById('indx_taxschedule30'),
      cuenta_desviacion_cantidad_produccion: document.getElementsByName('prodqtyvarianceacct_display')[0],
      cuenta_desviacion_cantidad_produccion_hddn: document.getElementById('hddn_prodqtyvarianceacct_fs'),
      cuenta_desviacion_precio_produccion: document.getElementsByName('prodpricevarianceacct_display')[0],
      cuenta_desviacion_precio_produccion_hddn: document.getElementById('hddn_prodpricevarianceacct_fs'),
      cuenta_desviacion_precio_compra: document.getElementsByName('purchasepricevarianceacct_display')[0],
      cuenta_desviacion_precio_compra_hddn: document.getElementById('hddn_purchasepricevarianceacct_fs'),
    },
    autocompletar_campos: (base,_unidad_medida,_unidad_medida_hddn,_cod_unidad_medida) => {
      obj.var_campos.subsidiaria.value=base.subsidiaria;
      obj.var_campos.subsidiaria_principal.classList.remove('dropdownSelected');
      obj.var_campos.subsidiaria_principal.classList.add('dropdownNotSelected');
      obj.var_campos.subsidiaria_biomont.classList.remove('dropdownNotSelected');
      obj.var_campos.subsidiaria_biomont.classList.add('dropdownSelected');
      obj.var_campos.inactivo.setAttribute('checked',base.inactivo);
      obj.var_campos.vigencia.value='0';
      obj.var_campos.vigencia_hddn.value='0';
      obj.var_campos.lote_standar.value='0';
      obj.var_campos.lote_standar_hddn.value='0';
      obj.var_campos.metodo_calculo_costo.value=base.metodo_calculo_costo;
      if(obj.var_campos.metodo_calculo_costo_hddn){
        obj.var_campos.metodo_calculo_costo_hddn.value=base.metodo_calculo_costo_hddn;
        obj.var_campos.metodo_calculo_costo_indx.value=base.metodo_calculo_costo_indx;
      }
      obj.var_campos.tipo_producto.value=base.tipo_producto;
      obj.var_campos.tipo_producto_hddn.value=base.tipo_producto_hddn;
      obj.var_campos.almacen.value=base.almacen;
      obj.var_campos.almacen_hddn.value=base.almacen_hddn;
      obj.var_campos.centro_costo.value=base.centro_costo;
      obj.var_campos.centro_costo_hddn.value=base.centro_costo_hddn;
      obj.var_campos.soporte_oferta.setAttribute('checked',base.soporte_oferta);
      obj.var_campos.utiliza_deposito.setAttribute('checked',base.utiliza_deposito);
      if(obj.var_campos.categoria_costo){
        obj.var_campos.categoria_costo.value=base.categoria_costo;
      }
      obj.var_campos.consumo.setAttribute('checked',base.consumo);
      obj.var_campos.consumo_chk.classList.remove('checkbox_unck');
      obj.var_campos.consumo_chk.classList.add('checkbox_ck');
      obj.var_campos.cuenta_compras.value=base.cuenta_compras;
      obj.var_campos.cuenta_compras_hddn.value=base.cuenta_compras_hddn;
      obj.var_campos.cuenta_variacion.value=base.cuenta_variacion;
      obj.var_campos.cuenta_variacion_hddn.value=base.cuenta_variacion_hddn;
      obj.var_campos.tipo_existencia.value=base.tipo_existencia;
      obj.var_campos.tipo_existencia_hddn.value=base.tipo_existencia_hddn;
      obj.var_campos.catalogo_existencia.value=base.catalogo_existencia;
      obj.var_campos.catalogo_existencia_hddn.value=base.catalogo_existencia_hddn;
      obj.var_campos.catalogo_existencia_indx.value=base.catalogo_existencia_indx;
      obj.var_campos.metodo_valuacion.value=base.metodo_valuacion;
      obj.var_campos.metodo_valuacion_hddn.value=base.metodo_valuacion_hddn;
      obj.var_campos.metodo_valuacion_indx.value=base.metodo_valuacion_indx;
      obj.var_campos.unidad_medida.value=_unidad_medida;
      obj.var_campos.unidad_medida_hddn.value=_unidad_medida_hddn;
      obj.var_campos.cod_tipo_existencia.value=base.cod_tipo_existencia;
      obj.var_campos.cod_tipo_existencia_hddn.value=base.cod_tipo_existencia_hddn;
      obj.var_campos.cod_inventory_catalog.value=base.cod_inventory_catalog;
      obj.var_campos.cod_inventory_catalog_hddn.value=base.cod_inventory_catalog_hddn;
      obj.var_campos.cod_metodo_valuacion.value=base.cod_metodo_valuacion;
      obj.var_campos.cod_metodo_valuacion_hddn.value=base.cod_metodo_valuacion_hddn;
      obj.var_campos.cod_unidad_medida.value=_cod_unidad_medida;
      obj.var_campos.cod_cubso.value=base.cod_cubso;
      obj.var_campos.cuenta_costo_productos_vendidos.value=base.cuenta_costo_productos_vendidos;
      obj.var_campos.cuenta_costo_productos_vendidos_hddn.value=base.cuenta_costo_productos_vendidos_hddn;
      obj.var_campos.cuenta_activo.value=base.cuenta_activo;
      obj.var_campos.cuenta_activo_hddn.value=base.cuenta_activo_hddn;
      obj.var_campos.cuenta_ingresos.value=base.cuenta_ingresos;
      obj.var_campos.cuenta_ingresos_hddn.value=base.cuenta_ingresos_hddn;
      obj.var_campos.cuenta_desviacion_precio.value=base.cuenta_desviacion_precio;
      obj.var_campos.cuenta_desviacion_precio_hddn.value=base.cuenta_desviacion_precio_hddn;
      obj.var_campos.cuenta_desviacion_cantidad.value=base.cuenta_desviacion_cantidad;
      obj.var_campos.cuenta_desviacion_cantidad_hddn.value=base.cuenta_desviacion_cantidad_hddn;
      obj.var_campos.cuenta_variacion_tipo_cambio.value=base.cuenta_variacion_tipo_cambio;
      obj.var_campos.cuenta_variacion_tipo_cambio_hddn.value=base.cuenta_variacion_tipo_cambio_hddn;
      obj.var_campos.cuenta_rechazo.value=base.cuenta_rechazo;
      obj.var_campos.cuenta_rechazo_hddn.value=base.cuenta_rechazo_hddn;
      obj.var_campos.cuenta_wip.value=base.cuenta_wip;
      obj.var_campos.cuenta_wip_hddn.value=base.cuenta_wip_hddn;
      obj.var_campos.cuenta_desviacion_desensamblaje.value=base.cuenta_desviacion_desensamblaje;
      obj.var_campos.cuenta_desviacion_desensamblaje_hddn.value=base.cuenta_desviacion_desensamblaje_hddn;
      obj.var_campos.programa_fiscal.value=base.programa_fiscal;
      obj.var_campos.programa_fiscal_hddn.value=base.programa_fiscal_hddn;
      obj.var_campos.programa_fiscal_indx.value=base.programa_fiscal_indx;
      obj.var_campos.cuenta_desviacion_cantidad_produccion.value=base.cuenta_desviacion_cantidad_produccion;
      obj.var_campos.cuenta_desviacion_cantidad_produccion_hddn.value=base.cuenta_desviacion_cantidad_produccion_hddn;
      obj.var_campos.cuenta_desviacion_precio_produccion.value=base.cuenta_desviacion_precio_produccion;
      obj.var_campos.cuenta_desviacion_precio_produccion_hddn.value=base.cuenta_desviacion_precio_produccion_hddn;
      obj.var_campos.cuenta_desviacion_precio_compra.value=base.cuenta_desviacion_precio_compra;
      obj.var_campos.cuenta_desviacion_precio_compra_hddn.value=base.cuenta_desviacion_precio_compra_hddn;
    },
    llenar_campos: (linea,unidad,base) => {
      let _unidad_medida = '';
      let _unidad_medida_hddn = '';
      let _cod_unidad_medida = '';
      //let _cod_unidad_medida_hddn = '';
      switch(unidad){
        case 'UNIDADES':
          _unidad_medida='Unidad (Bienes)';
          _unidad_medida_hddn='58';
          _cod_unidad_medida='NIU';
          //_cod_unidad_medida_hddn='NIU';
          break;
        case 'LITROS':
          _unidad_medida='Litro';
          _unidad_medida_hddn='29';
          _cod_unidad_medida='LTR';
          //_cod_unidad_medida_hddn='NIU';
          break;
        case 'KILOS':
          _unidad_medida='Kilogramo';
          _unidad_medida_hddn='23';
          _cod_unidad_medida='KGM';
          //_cod_unidad_medida_hddn='NIU';
          break;
        case 'METROS':
          _unidad_medida='Metro';
          _unidad_medida_hddn='31';
          _cod_unidad_medida='MTR';
          //_cod_unidad_medida_hddn='MTR';
          break;
        default:
          break;
      }

      switch(linea){
          case 'INYECTABLES':
            obj.autocompletar_campos(base.INYECTABLES,_unidad_medida,_unidad_medida_hddn,_cod_unidad_medida);
          break;
          case 'LIQUIDOS':
            obj.autocompletar_campos(base.LIQUIDOS,_unidad_medida,_unidad_medida_hddn,_cod_unidad_medida);
          break;
          case 'BULK Y PRODUCTOS INTERMEDIOS':
            obj.autocompletar_campos(base.BULK_PRODUCTOS_INTERMEDIOS,_unidad_medida,_unidad_medida_hddn,_cod_unidad_medida);
          break;
          case 'SOLIDOS':
            obj.autocompletar_campos(base.SOLIDOS,_unidad_medida,_unidad_medida_hddn,_cod_unidad_medida);
          break;
          case 'SEMISOLIDOS':
            obj.autocompletar_campos(base.SEMISOLIDOS,_unidad_medida,_unidad_medida_hddn,_cod_unidad_medida);
          break;
          case 'POLVOS':
            obj.autocompletar_campos(base.POLVOS,_unidad_medida,_unidad_medida_hddn,_cod_unidad_medida);
          break;
          case 'PRODUCTOS INTERMEDIOS TERCEROS':
            obj.autocompletar_campos(base.PRODUCTOS_INTERMEDIOS_TERCEROS,_unidad_medida,_unidad_medida_hddn,_cod_unidad_medida);
          break;
          case 'AEROSOL':
            obj.autocompletar_campos(base.AEROSOL,_unidad_medida,_unidad_medida_hddn,_cod_unidad_medida);
          break;
          case 'ALIMENTOS ACTIVOS BIOLOGICOS':
            obj.autocompletar_campos(base.ALIMENTOS_ACTIVOS_BIOLOGICOS,_unidad_medida,_unidad_medida_hddn,_cod_unidad_medida);
          break;
          case 'PRODUCTO PILOTO':
            obj.autocompletar_campos(base.PRODUCTO_PILOTO,_unidad_medida,_unidad_medida_hddn,_cod_unidad_medida);
          break;
          case 'SOLUCIONES TOPICAS':
            obj.autocompletar_campos(base.SOLUCIONES_TOPICAS,_unidad_medida,_unidad_medida_hddn,_cod_unidad_medida);
          break;
          case 'MUESTRAS MEDICAS':
            obj.autocompletar_campos(base.MUESTRAS_MEDICAS,_unidad_medida,_unidad_medida_hddn,_cod_unidad_medida);
          break;
          //case 'PRODUCTO INTERMEDIO POLVOS':
          //  obj.autocompletar_campos(base.PRODUCTO_INTERMEDIO_POLVOS,_unidad_medida,_unidad_medida_hddn,_cod_unidad_medida);
          //break;
      }

      obj.var_campos_desactivar();

    },
    funcReplica: (event,elementMain,arrayElements) => {
      document.getElementsByName(elementMain)[0].addEventListener(event,(e)=>{
        arrayElements.forEach((arr)=>{ 
          obj.convertirMayuscula(elementMain);
          obj.convertirMayuscula(arr);
          document.getElementsByName(arr)[0].value = document.getElementsByName(elementMain)[0].value;
        })
      })
    },
    replicaDescripcion: () => {
      ['keyup', 'blur'].forEach((ev)=>{obj.funcReplica(ev,'displayname',['description','stockdescription'])});
    },
    getNumeroCorrelativo: (num,nomenclatura) => {
      if(nomenclatura.length==3)
        return `${nomenclatura}${(+num+1).toString().padStart(7, 0)}`;
      else
        return `${nomenclatura}${(+num+1).toString().padStart(8, 0)}`;
    },
    getCorrelativoLineaArticulo: () => {
       if(document.getElementById('custitem3_popup_list')){
         document.getElementById('custitem3_popup_list').addEventListener('click',()=>{
           setTimeout(()=>{
              document.getElementsByName('st')[0].remove();
              document.getElementById('tr_Search').remove();
              if(document.getElementById('inner_popup_div')){
                 let array_tr = [...document.getElementById('inner_popup_div').childNodes[0].childNodes[1].children];
                 let filtrado = array_tr.filter((elemento)=>{
                   //return arrayLineas.includes(elemento.cells[1].innerText) && elemento.cells[1].innerText!=='ALIMENTOS ACTIVOS BIOLOGICOS' && elemento.cells[1].innerText!=='PRODUCTOS INTERMEDIOS TERCEROS'
                   return arrayLineas.includes(elemento.cells[1].innerText)
                 });
                 document.querySelector('#inner_popup_div table tbody').remove();
                 document.querySelector('#inner_popup_div table').appendChild(document.createElement('tbody'));
                 filtrado.forEach(elemento=>{
                   document.querySelector('#inner_popup_div table tbody').appendChild(elemento);
                 });
                 array_tr = [...document.getElementById('inner_popup_div').childNodes[0].childNodes[1].children];
                 array_tr.forEach((elemento,indice)=>{
                   elemento.addEventListener('click',()=>{
                     if(obj.stock.value===' '){
                       alert('Seleccione la unidad');
                       obj.linea.value='';
                       return false;
                     }
                     obj.display_blocker("Cargando información...");
                     const dato = { 
                       linea: elemento.childNodes[3].childNodes[1].innerText.trim(),
                       unidad: obj.unidad_stock_principal.value.trim()
                     };
                     fetch(BASE_URL+'/correlativoarticulo/getCorrelativoLineaArticulo',{
                          method: "POST",
                          headers: {
                           'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
                          },
                          body: JSON.stringify({"dato":dato})
                       })
                       .then((response) => response.json())
                       .then((data) => {
                         document.getElementById('id-blocker').style.display='none';
                         document.getElementById('id-popup').style.display='none';
                         arrayLineas.forEach(linea=>{
                           if(dato.linea === linea){
                             obj.input_codigo_articulo.value = obj.getNumeroCorrelativo(data.num,data.nomen);
                             obj.llenar_campos(dato.linea,dato.unidad,data_base);
                             document.getElementsByName('custitem5')[0].focus();
                           }
                         });
                       })
                       .catch(error => console.error(error));
                   });
                 });
              }
           },2000)
         });
       }else{
         //document.getElementById('custitem3_display').addEventListener('blur',()=>{
         //  document.getElementById('custbody138').value=document.getElementById('custitem3_display').title;
         //});
         console.log("valor",false);
       }
    },
    display_blocker : (mensaje) => {
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
      table.width='250';
      table.cellspacing='0';
      table.cellpadding='0';
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
      img.src=URL_IMG_LOADING_NS+ID_IMG_LOADING_NS;
      img.style.width="20px";
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
    enviar_correo : () => {
        obj.main_form.addEventListener("submit",(e)=>{
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
            
            setTimeout(element_email.dispatchEvent(event),500);
            setTimeout(()=>{
  
              let dato = {
                id_formulario: obj.id_formulario.value,
                codigo_articulo: obj.input_codigo_articulo.value,
                descripcion_articulo: obj.input_descripcion_articulo.value,
                nombre_aprobador: obj.input_nombre_aprobador.value,
                email_aprobador: document.querySelector('#email_fs a').innerHTML,
                linea_articulo: obj.linea.value
              }
  
              fetch(BASE_URL+"/correlativoarticulo/sendEmailNotification",{
                  method: "POST",
                  headers: {
                   'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
                  },
                  body: JSON.stringify({"dato":dato})
              })
              .then((response) => response.json())
              .then((data) => {
                if(data.est==0){
                  obj.var_campos.inactivo.removeAttribute("checked");
                  document.getElementsByName('description')[0].value = document.getElementsByName('description')[0].value + ' ';
                  alert("El correo se envió correctamente");
                  obj.main_form.submit();
                  return true;
                }else{
                  alert("Hubo un error en el envío de correo");
                  return false;
                }
              })
              .catch(error => console.error(error));
  
            },3000);
            
        });
    },
    actualiza_correlativo : () => {
        obj.main_form.addEventListener("submit",(e)=>{
            e.preventDefault();

             let array_validation = [
               document.getElementsByName('subsidiary')[0], //subsidiaria
               document.getElementById('itemid'), //codigo
               document.getElementsByName('custitem5')[0], //volumen
               document.getElementsByName('custitem6_display')[0], //Presentacion
               document.getElementsByName('custitem10_formattedValue')[0], //Vigencia
               document.getElementsByName('custitem11_formattedValue')[0], //Lote standar
               document.getElementsByName('custitem14')[0], //Producto Bulk
               document.getElementsByName('custitem15_display')[0], //Accion Farmacologica
               document.getElementsByName('location_display')[0], //Almacen
               document.getElementsByName('class_display')[0], //Centro de costo
               document.getElementsByName('custitem3_display')[0],  //linea
               document.getElementsByName('inpt_stockunit')[0], //Unidad de stock
               document.getElementById('displayname'), //Descripcion del articulo
               document.getElementById('description'), //Descripcion de la venta
               document.getElementById('stockdescription') //Descripcion de stock
             ];
             let new_array_validation = [];
             let input_validado = [...array_validation].filter((elemento,index)=>{
               if(elemento.value === "" || elemento.value === " " || elemento.value === "<Type then tab>" || elemento.value === '1'){
                 let new_index='';
                 switch(index){
                   case 0:
                     new_index='Subsidiaria BIOMONT';
                     break;
                   case 1:
                     new_index='Codigo';
                     break;
                   case 2:
                     new_index='Volumen';
                     break;
                   case 3:
                     new_index='Presentacion';
                     break;
                   case 4:
                     new_index='Vigencia';
                     break;
                   case 5:
                     new_index='Lote Standar';
                     break;
                   case 6:
                     new_index='Producto Bulk';
                     break;
                   case 7:
                     new_index='Accion Farmacologica';
                     break;
                   case 8:
                     new_index='Almacen';
                     break;
                   case 9:
                     new_index='Centro de Costo';
                     break;
                   case 10:
                     new_index='Linea';
                     break;
                   case 11:
                     new_index='Unidades de Stock';
                     break;
                   case 12:
                     new_index='Descripcion del Articulo';
                     break;
                   case 13:
                     new_index='Descripcion de la Venta';
                     break;
                   case 14:
                     new_index='Descripcion de Stock';
                     break;
                 }
                 new_array_validation.push(new_index)
               }
             });
             
             if(new_array_validation.length!==0){
               alert(`Por favor ingrese los campos obligatorios:\n-${new_array_validation.join('\n-')}`)
               return false;
             }else{
               obj.display_blocker("Actualizando correlativo...");
               let dato = {
                 nomenclatura: obj.input_codigo_articulo.value.substring(0,obj.input_codigo_articulo.value.indexOf('0')),
                 correlativo_vista: +obj.input_codigo_articulo.value.replace(/[^0-9]+/g, "")
               }
      
               fetch(BASE_URL+"/correlativoarticulo/updateCorrelativoLineaArticulo",{
                   method: "POST",
                   headers: {
                    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
                   },
                   body: JSON.stringify({"dato":dato})
               })
               .then((response) => response.json())
               .then((data) => {
                 if(data.res){
                   alert("Correlativo actualizado correctamente");
                   obj.main_form.submit();
                   return true;
                 }else{
                   alert("Hubo un error en la actualizacion del correlativo");
                   return false;
                 }
               })
               .catch(error => console.error(error));
             }

        });
    },
    setBotonFirmaAprobado: () =>{
      const boton_aprobador=document.createElement('button');
      boton_aprobador.id='id-boton-aprobado';
      boton_aprobador.innerHTML='Firmar';
      boton_aprobador.onclick=(e)=>{
        obj.enviar_correo();
      };
      const salto_linea=document.createElement('br');
      obj.input_nombre_aprobador.insertAdjacentElement('afterend',salto_linea);
      salto_linea.insertAdjacentElement('afterend',boton_aprobador);
    },
    msj_error:{
      tb_td_ref_con_top: document.getElementsByTagName('tr')[0],
      tb_td_ref_con_bottom : document.getElementsByClassName("bdtabblock")[0],
      tr_con_top : document.createElement("tr"),
      td_con_top : document.createElement("td"),
      td_con_bottom : document.createElement("td"),
      sp_con_top : document.createElement("span"),
      sp_con_bottom : document.createElement("span"),
      link_conex_top : document.createElement("a"),
      link_conex_bottom : document.createElement("a"),
    },
    msj_conexion: () => {
      obj.msj_error.sp_con_top.id = "txt_con_top";
      obj.msj_error.sp_con_top.style.fontSize = "14px";
      obj.msj_error.sp_con_top.style.fontWeight  = "bold";
      obj.msj_error.td_con_top.style.backgroundColor  = "#ffff61";
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
      obj.msj_error.sp_con_bottom.style.fontWeight  = "bold";
      obj.msj_error.td_con_bottom.style.backgroundColor  = "#ffff61";
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
      document.getElementsByName(elemento)[0].addEventListener('input',()=>{
          let start = document.getElementsByName(elemento)[0].selectionStart;
          let end = document.getElementsByName(elemento)[0].selectionEnd;
          document.getElementsByName(elemento)[0].value = document.getElementsByName(elemento)[0].value.toUpperCase();
          document.getElementsByName(elemento)[0].setSelectionRange(start, end);
        });
    },
    conexion : () => {
      fetch(BASE_URL+"/correlativoarticulo/index")
      .then((response) => response.json())
      .then((data) => {
  
        obj.replicaDescripcion();
    
        obj.getCorrelativoLineaArticulo();

        document.getElementsByName('inpt_unitstype')[0].addEventListener('click',()=>{
          obj.linea.value="";
        });

        obj.convertirMayuscula('custitem14');
        
      })
      .catch(error => {
        console.error(error);
  
        obj.msj_conexion();
  
      });
    }
  }
  
  if(obj.id_formulario.value===""){
  
    console.log("Guardar");

    if(document.getElementsByName('inpt_customform')[0]){
      document.getElementsByName('inpt_customform')[0].setAttribute('style','pointer-events: none;');
    }
    document.getElementById('custitem3_display').setAttribute('style','pointer-events: none;');
    
    const aprobador = document.getElementsByName('inpt_custitem24')[0];
    const aprobador_flecha = document.getElementById('inpt_custitem246_arrow') || document.getElementById('inpt_custitem247_arrow') || document.getElementById('inpt_custitem248_arrow') || document.getElementById('inpt_custitem2410_arrow');

    const accion_aprobador_popup = document.querySelector('#custitem24_fs span.uir-field-widget');
    
    const accion_aprobar = document.getElementsByName('inpt_custitem25')[0];
    const accion_aprobar_flecha = document.getElementById('inpt_custitem255_arrow') || document.getElementById('inpt_custitem256_arrow') || document.getElementById('inpt_custitem259_arrow') || document.getElementById('inpt_custitem257_arrow');
    const accion_aprobar_hddn = document.getElementById('hddn_custitem257') || document.getElementById('hddn_custitem256') || document.getElementById('hddn_custitem255') || document.getElementById('hddn_custitem259');
    const accion_aprobar_indx = document.getElementById('indx_custitem257') || document.getElementById('indx_custitem256') || document.getElementById('indx_custitem255') || document.getElementById('indx_custitem259');

    const accion_aprobar_popup = document.querySelector('#custitem25_fs span.uir-field-widget');

    aprobador.setAttribute('style','pointer-events: none;');
    aprobador_flecha.setAttribute('style','display: none;');
    accion_aprobar.value = 'PENDIENTE';
    accion_aprobar_hddn.value = '1';
    accion_aprobar_indx.value = '2';
    
    accion_aprobar.setAttribute('style','pointer-events: none;');
    accion_aprobar_flecha.setAttribute('style','display: none;');
    if(accion_aprobador_popup){
      accion_aprobador_popup.setAttribute('style','display: none;');
      accion_aprobar_popup.setAttribute('style','display: none;');
    }

    obj.actualiza_correlativo();

    obj.conexion();
  
  }else{

    console.log("Editar");
    
    if(document.getElementsByName('description')[0].value.lastIndexOf(' ')!==document.getElementsByName('description')[0].value.length-1){
      obj.setBotonFirmaAprobado();
    }

    if(document.getElementsByName('description')[0].value!==''){
      const aprobador_sesion = document.querySelector('div#uif38 span');
      
      const aprobador = document.getElementsByName('inpt_custitem24')[0];
      const aprobador_hddn = document.getElementById('hddn_custitem247') || document.getElementById('hddn_custitem246');
      const aprobador_indx = document.getElementById('indx_custitem247') || document.getElementById('indx_custitem246');
      const aprobador_flecha = document.getElementById('inpt_custitem246_arrow');
      const aprobador_popup = document.querySelector('#custitem24_fs span.uir-field-widget');
      
      const accion_aprobar = document.getElementsByName('inpt_custitem25')[0];
      accion_aprobar.value = 'APROBADO';
      const accion_aprobar_hddn = document.getElementById('hddn_custitem256') || document.getElementById('hddn_custitem255');
      accion_aprobar_hddn.value = '2';
      const accion_aprobar_indx = document.getElementById('indx_custitem256') || document.getElementById('indx_custitem255');
      accion_aprobar_indx.value = '2';
      const accion_aprobar_flecha = document.getElementById('inpt_custitem255_arrow');
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

  }
});