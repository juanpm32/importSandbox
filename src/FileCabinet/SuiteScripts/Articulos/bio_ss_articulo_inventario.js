window.addEventListener("load", (e) => {
	"use strict";
	const BASE_URL = "https://170.239.101.46:8080/bionetsuite_sb";
	const URL_IMG_LOADING_NS = "https://6462530.app.netsuite.com/core/media/media.nl?id=";
	const ID_IMG_LOADING_NS = "18490&c=6462530&h=YP9k6isls_cI8JCK-2WVaaAVhNeKfrsFLLzgJAPUsLZzrQR1&fcts=20220506124019&whence=";

	document.getElementsByName("custitem21")[0].value = '22186';
	document.getElementsByName("custitem21")[0].setAttribute('type', '');
	document.getElementsByName("nluser")[0].value = '22150';
	//document.getElementsByName("nlrole")[0].value = '1080';

	const usuarios_registradores = [
		{ area: 'ENSAYOS CLINICOS', nomusuario: 'JOE LEO PIZARRO PAREDES', correo: 'jpizarro@biomont.com.pe', idusuario: '1746', idrol: null, nomrol: null, idrevisador: '1739' },
		{ area: 'CONTROL Y ASEGURAMIENTO DE LA CALIDAD', nomusuario: 'KARIN KATHERIN MUGA ROJAS', correo: 'kmuga@biomont.com.pe', idusuario: '298', idrol: '1120', nomrol: 'BIO_ROL_CREACION_ARTICULO', idrevisador: '301' },
		{ area: 'CONTROL Y ASEGURAMIENTO DE LA CALIDAD', nomusuario: 'LIZ MARIANELA GOMEZ BRICEÑO', correo: 'lgomez@biomont.com.pe', idusuario: '300', idrol: '1120', nomrol: 'BIO_ROL_CREACION_ARTICULO', idrevisador: '301' },
		{ area: 'CONTROL Y ASEGURAMIENTO DE LA CALIDAD', nomusuario: 'LIZET JANET ALFARO VERDE', correo: 'analistascc@biomont.com.pe', idusuario: '1756', idrol: '1120', nomrol: 'BIO_ROL_CREACION_ARTICULO', idrevisador: '301' },
		{ area: 'CONTROL Y ASEGURAMIENTO DE LA CALIDAD', nomusuario: 'SUSAN LIZET ELIAS DA SILVA', correo: 'selias@biomont.com.pe', idusuario: '303', idrol: '1120', nomrol: 'BIO_ROL_CREACION_ARTICULO', idrevisador: '301' },
		{ area: 'MANTENIMIENTO', nomusuario: 'MELISSA PIMENTEL MEJIA', correo: 'mpimentel@biomont.com.pe', idusuario: '290', idrol: '1120', nomrol: 'BIO_ROL_CREACION_ARTICULO', idrevisador: '290' },
		{ area: 'MANTENIMIENTO', nomusuario: 'SERGIO RODRIGUEZ POLAR', correo: 'srodriguez@biomont.com.pe', idusuario: '27348', idrol: null, nomrol: null, idrevisador: '290' },
		{ area: 'INVESTIGACION Y DESARROLLO', nomusuario: 'MICHAEL TONY OLLERO CAMARENA', correo: 'mollero@biomont.com.pe', idusuario: '22186', idrol: '1120', nomrol: 'BIO_ROL_CREACION_ARTICULO', idrevisador: '1733' },
		{ area: 'INVESTIGACION Y DESARROLLO', nomusuario: 'ANABELL CAMPOS CALERO', correo: 'acampos@biomont.com.pe', idusuario: '22197', idrol: '1120', nomrol: 'BIO_ROL_CREACION_ARTICULO', idrevisador: '1733' },
		{ area: 'INVESTIGACION Y DESARROLLO', nomusuario: 'YOZELY SOTO VILCHEZ', correo: 'ysoto@biomont.com.pe', idusuario: '312', idrol: '1120', nomrol: 'BIO_ROL_CREACION_ARTICULO', idrevisador: '1733' },
		{ area: 'PRODUCCION', nomusuario: 'MARY VICENTA MIRANDA CACEDA', correo: 'mmiranda@biomont.com.pe', idusuario: '295', idrol: '1120', nomrol: 'BIO_ROL_CREACION_ARTICULO', idrevisador: '283' },
		{ area: 'COMERCIAL', nomusuario: 'BLANCA SARITA ELUGO GUEVARA', correo: 'belugo@biomont.com.pe', idusuario: '274', idrol: '1120', nomrol: 'BIO_ROL_CREACION_ARTICULO', idrevisador: '274' },
		{ area: 'TI', nomusuario: 'MAGNO LUCIO REVATTA ÑAÑEZ', correo: 'mrevatta@biomont.com.pe', idusuario: '319', idrol: '1120', nomrol: 'BIO_ROL_CREACION_ARTICULO', idrevisador: '319' },
		{ area: 'CONTABILIDAD', nomusuario: 'PAOLO EPIFANIO VICHARRA FLORIAN', correo: 'pvicharra@Biomont.com.pe', idusuario: '296', idrol: '1120', nomrol: 'BIO_ROL_CREACION_ARTICULO', idrevisador: '296' },
		{ area: 'RRHH', nomusuario: 'WILMER PINEDO HUAMAN', correo: 'wpinedo@biomont.com.pe', idusuario: '1802', idrol: null, nomrol: null, idrevisador: '1802' },
		{ area: 'RRHH', nomusuario: 'GERIL BERENIZE CASTRO HUAMAN', correo: 'gcastro@biomont.com.pe', idusuario: '1817', idrol: null, nomrol: null, idrevisador: '1817' },
		{ area: 'ADMINISTRACION', nomusuario: 'ALEXANDRA MEYLIN DURAND BALDEON', correo: 'adurand@biomont.com.pe', idusuario: '22194', idrol: '1120', nomrol: 'BIO_ROL_CREACION_ARTICULO', idrevisador: '276' },
		{ area: 'ALMACEN', nomusuario: 'CESAR ENRIQUE SUNCION SOSA', correo: 'csuncion@biomont.com.pe', idusuario: '285', idrol: '1120', nomrol: 'BIO_ROL_CREACION_ARTICULO', idrevisador: '285' },
		{ area: 'MARKETING', nomusuario: 'LINCOLN GIAMPIERRE ZAMUDIO CASTILLO', correo: 'lzamudio@biomont.com.pe', idusuario: '24738', idrol: '1120', nomrol: 'BIO_ROL_CREACION_ARTICULO', idrevisador: '24738' },
		{ area: 'MARKETING', nomusuario: 'JEAN FRANCO ALCANTARA RODRIGUEZ', correo: 'jalcantara@biomont.com.pe', idusuario: '27817', idrol: '1120', nomrol: 'BIO_ROL_CREACION_ARTICULO', idrevisador: '27817' },
		{ area: 'MARKETING', nomusuario: 'ROSALIA GARFIAS DE LA CRUZ', correo: 'rgarfias@biomont.com.pe', idusuario: '1796', idrol: '1120', nomrol: 'BIO_ROL_CREACION_ARTICULO', idrevisador: '1796' },
		{ area: 'FINANZAS', nomusuario: 'ALBINA ROSA YARINGAÑO PIZARRO', correo: 'ayaringano@biomont.com.pe', idusuario: '170', idrol: '1120', nomrol: 'BIO_ROL_CREACION_ARTICULO', idrevisador: '170' },
	];

	const usuarios_revisadores = [
		{ nomusuario: 'IVAN NOLY REYNA WATANABE', correo: 'ireyna@biomont.com.pe', idusuario: '1739', idrol: null, nomrol: null, correos_adicionales: ['ireyna@biomont.com.pe', 'jpizarro@biomont.com.pe', 'avilchez@biomont.com.pe', 'kcelestino@biomont.com.pe', 'lbasualdo@biomont.com.pe'] },
		{ nomusuario: 'EDISON RONALD VERA VASQUEZ', correo: 'evera@biomont.com.pe', idusuario: '301', idrol: '1076', nomrol: 'BIO_ROL_CALIDAD', correos_adicionales: ['evera@biomont.com.pe', 'kmuga@biomont.com.pe', 'lgomez@biomont.com.pe', 'analistascc@biomont.com.pe', 'selias@biomont.com.pe', 'dguzman@Biomont.com.pe', 'avilchez@biomont.com.pe', 'kcelestino@biomont.com.pe', 'lbasualdo@biomont.com.pe'] },
		{ nomusuario: 'MELISSA PIMENTEL MEJIA', correo: 'mpimentel@biomont.com.pe', idusuario: '290', idrol: '1090', nomrol: 'BIO_ROL_OPERACIONES_PLANTA_ASISTENTE', correos_adicionales: ['mantenimiento@biomont.com.pe', 'srodriguez@biomont.com.pe', 'mantenimiento.adm@biomont.com.pe', 'avilchez@biomont.com.pe', 'kcelestino@biomont.com.pe', 'lbasualdo@biomont.com.pe'] },
		{ nomusuario: 'ERIKA LUCIA TACUNAN RIVEROS', correo: 'etacunan@biomont.com.pe', idusuario: '1733', idrol: '1066', nomrol: 'BIO_ROL_ID', correos_adicionales: ['id@biomont.com.pe', 'avilchez@biomont.com.pe', 'kcelestino@biomont.com.pe', 'lbasualdo@biomont.com.pe'] },
		{ nomusuario: 'CONSTANTINO IVAN POMIANO JESUS', correo: 'cpomiano@biomont.com.pe', idusuario: '283', idrol: '1065', nomrol: 'BIO_ROL_PRODUCCION', correos_adicionales: ['cpomiano@biomont.com.pe', 'mmiranda@biomont.com.pe', 'avilchez@biomont.com.pe', 'kcelestino@biomont.com.pe', 'lbasualdo@biomont.com.pe'] },
		{ nomusuario: 'BLANCA SARITA ELUGO GUEVARA', correo: 'belugo@biomont.com.pe', idusuario: '274', idrol: '1074', nomrol: 'BIO_ROL_COMERCIAL_ASISTENTE', correos_adicionales: ['belugo@biomont.com.pe', 'avilchez@biomont.com.pe', 'kcelestino@biomont.com.pe', 'lbasualdo@biomont.com.pe'] },
		{ nomusuario: 'CESAR ENRIQUE SUNCION SOSA', correo: 'csuncion@biomont.com.pe', idusuario: '285', idrol: '1069', nomrol: 'BIO_ROL_ALMACEN', correos_adicionales: ['csuncion@biomont.com.pe', 'avilchez@biomont.com.pe', 'kcelestino@biomont.com.pe', 'lbasualdo@biomont.com.pe'] },
		{ nomusuario: 'GERIL BERENIZE CASTRO HUAMAN', correo: 'gcastro@biomont.com.pe', idusuario: '1817', idrol: null, nomrol: null, correos_adicionales: ['gcastro@biomont.com.pe', 'wpinedo@biomont.com.pe', 'avilchez@biomont.com.pe', 'kcelestino@biomont.com.pe', 'lbasualdo@biomont.com.pe'] },
		{ nomusuario: 'WILMER PINEDO HUAMAN', correo: 'wpinedo@biomont.com.pe', idusuario: '1802', idrol: null, nomrol: null, correos_adicionales: ['wpinedo@biomont.com.pe', 'gcastro@biomont.com.pe', 'avilchez@biomont.com.pe', 'kcelestino@biomont.com.pe', 'lbasualdo@biomont.com.pe'] },
		{ nomusuario: 'PAOLO EPIFANIO VICHARRA FLORIAN', correo: 'pvicharra@Biomont.com.pe', idusuario: '296', idrol: '1051', nomrol: 'BIO_ROL_CONTABILIDAD_ASISTENTE', correos_adicionales: ['pvicharra@Biomont.com.pe', 'avilchez@biomont.com.pe', 'kcelestino@biomont.com.pe', 'lbasualdo@biomont.com.pe'] },
		{ nomusuario: 'MAGNO LUCIO REVATTA ÑAÑEZ', correo: 'mrevatta@biomont.com.pe', idusuario: '319', idrol: null, nomrol: null, correos_adicionales: ['ti@biomont.com.pe', 'avilchez@biomont.com.pe', 'kcelestino@biomont.com.pe', 'lbasualdo@biomont.com.pe'] },
		{ nomusuario: 'DENIS BETTY ALAYO MERGILDO', correo: 'dalayo@biomont.com.pe', idusuario: '276', idrol: '1082', nomrol: 'BIO_ROL_ADMINISTRACION', correos_adicionales: ['adurand@Biomont.com.pe', 'avilchez@biomont.com.pe', 'kcelestino@biomont.com.pe', 'lbasualdo@biomont.com.pe'] },
		{ nomusuario: 'LINCOLN GIAMPIERRE ZAMUDIO CASTILLO', correo: 'lzamudio@biomont.com.pe', idusuario: '24738', idrol: null, nomrol: null, correos_adicionales: ['lzamudio@biomont.com.pe', 'jalcantara@biomont.com.pe', 'rgarfias@biomont.com.pe', 'pliviac@biomont.com.pe', 'avilchez@biomont.com.pe', 'kcelestino@biomont.com.pe', 'lbasualdo@biomont.com.pe'] },
		{ nomusuario: 'JEAN FRANCO ALCANTARA RODRIGUEZ', correo: 'jalcantara@biomont.com.pe', idusuario: '27817', idrol: null, nomrol: null, correos_adicionales: ['lzamudio@biomont.com.pe', 'jalcantara@biomont.com.pe', 'rgarfias@biomont.com.pe', 'pliviac@biomont.com.pe', 'avilchez@biomont.com.pe', 'kcelestino@biomont.com.pe', 'lbasualdo@biomont.com.pe'] },
		{ nomusuario: 'ROSALIA GARFIAS DE LA CRUZ', correo: 'rgarfias@biomont.com.pe', idusuario: '1796', idrol: '1085', nomrol: 'BIO_ROL_MARKETING_ASISTENTE', correos_adicionales: ['lzamudio@biomont.com.pe', 'jalcantara@biomont.com.pe', 'rgarfias@biomont.com.pe', 'pliviac@biomont.com.pe', 'avilchez@biomont.com.pe', 'kcelestino@biomont.com.pe', 'lbasualdo@biomont.com.pe'] },
		{ nomusuario: 'ALBINA ROSA YARINGAÑO PIZARRO', correo: 'ayaringano@biomont.com.pe', idusuario: '170', idrol: '1059', nomrol: 'BIO_ROL_FINANZAS_ASISTENTE', correos_adicionales: ['ayaringano@biomont.com.pe', 'avilchez@biomont.com.pe', 'kcelestino@biomont.com.pe', 'lbasualdo@biomont.com.pe'] },
	];

	const ususarios_aprobadores = [
		{ nomusuario: 'ANGELO VILCHEZ MARQUEZ', correo: 'avilchez@biomont.com.pe', idusuario: '22150', idrol: '1080', nomrol: 'BIO_ROL_LOGISTICA_PLANEAMIENTO' },
		{ nomusuario: 'KEVIN MARCEL CELESTINO PUCHOC', correo: 'kcelestino@biomont.com.pe', idusuario: '865', idrol: '1043', nomrol: 'BIO_ROL_LOGISTICA_COMPRADOR' },
		{ nomusuario: 'LILIAN ALINA BASUALDO SOTO', correo: 'lbasualdo@biomont.com.pe', idusuario: '26526', idrol: '1114', nomrol: 'BIO_ROL_LOGISTICA_SUPERVISOR' },
	];

	/**
	* ----creadores SR------
	* JOE LEO PIZARRO PAREDES
	* SERGIO RODRIGUEZ POLAR
	* WILMER PINEDO HUAMAN
	* GERIL BERENIZE CASTRO HUAMAN
	*/

	/**
	 * ---revisadores SR-----
	 * IVAN NOLY REYNA WATANABE
	 * GERIL BERENIZE CASTRO HUAMAN
	 * WILMER PINEDO HUAMAN
	 * LINCOLN GIAMPIERRE ZAMUDIO CASTILLO
	 * JEAN FRANCO ALCANTARA RODRIGUEZ
	 */


	let obj = {
		id_formulario: document.getElementsByName("id")[0],
		main_form: document.getElementsByName("main_form")[0],
		iduser: document.getElementsByName("nluser")[0],
		idrol: document.getElementsByName("nlrole")[0],
		inactivo_fs: document.getElementById('isinactive_fs'),
		bloque_detalle: document.getElementsByClassName('bdtabblock')[0],
		subsidiaria_fs: document.getElementById("subsidiary_fs"),
		input_codigo_articulo: document.getElementById("itemid"),
		input_descripcion_articulo: document.getElementsByName("displayname")[0],
		input_descripcion_venta: document.getElementById('salesdescription'),
		input_descripcion_compra: document.getElementById('purchasedescription'),
		input_descripcion_stock: document.getElementById('stockdescription'),
		input_linea_articulo: document.getElementsByName("custitem3_display")[0],

		input_estado_aprobacion: document.getElementsByName('custitem_articulo_estado_creacion')[0],
		input_id_creador: document.getElementsByName("custitem21")[0],
		input_nombre_revisador: document.getElementsByName('custitem_articulo_revisador')[0],
		input_nombre_aprobador: document.getElementsByName('custitem_articulo_aprobador')[0],

		tipo_unidades_name: document.getElementsByName('inpt_unitstype')[0],
		unidad_stock_principal: document.getElementsByName("inpt_stockunit")[0],
		metodo_costo: document.getElementsByName("inpt_costingmethod")[0],
		metodo_costo_flecha: document.getElementById("inpt_costingmethod6_arrow") || document.getElementById("inpt_costingmethod7_arrow") || document.getElementById("inpt_costingmethod8_arrow") || document.getElementById("inpt_costingmethod9_arrow") || document.getElementById("inpt_costingmethod10_arrow"),
		unidad_stock: document.getElementById("inpt_stockunit1") || document.getElementById("inpt_stockunit2") || document.getElementById("inpt_stockunit3") || document.getElementById("inpt_stockunit4") || document.getElementById("inpt_stockunit5"),
		unidad_stock_flecha: document.getElementById("inpt_stockunit1_arrow") || document.getElementById("inpt_stockunit2_arrow") || document.getElementById("inpt_stockunit3_arrow") || document.getElementById("inpt_stockunit4_arrow") || document.getElementById("inpt_stockunit5_arrow"),
		unidad_compra: document.getElementById("inpt_purchaseunit2") || document.getElementById("inpt_purchaseunit3") || document.getElementById("inpt_purchaseunit4") || document.getElementById("inpt_purchaseunit5") || document.getElementById("inpt_purchaseunit6"),
		unidad_compra_hddn: document.getElementById("hddn_purchaseunit2") || document.getElementById("hddn_purchaseunit3") || document.getElementById("hddn_purchaseunit4") || document.getElementById("hddn_purchaseunit5") || document.getElementById("hddn_purchaseunit6"),
		unidad_compra_indx: document.getElementById("indx_purchaseunit2") || document.getElementById("indx_purchaseunit3") || document.getElementById("indx_purchaseunit4") || document.getElementById("indx_purchaseunit5") || document.getElementById("indx_purchaseunit6"),
		unidad_compra_flecha: document.getElementById("inpt_purchaseunit2_arrow") || document.getElementById("inpt_purchaseunit3_arrow") || document.getElementById("inpt_purchaseunit4_arrow") || document.getElementById("inpt_purchaseunit5_arrow") || document.getElementById("inpt_purchaseunit6_arrow"),
		unidad_venta: document.getElementById("inpt_saleunit3") || document.getElementById("inpt_saleunit4") || document.getElementById("inpt_saleunit5") || document.getElementById("inpt_saleunit6"),
		unidad_venta_flecha: document.getElementById("inpt_saleunit3_arrow") || document.getElementById("inpt_saleunit4_arrow") || document.getElementById("inpt_saleunit5_arrow") || document.getElementById("inpt_saleunit6_arrow"),
		unidad_consumo: document.getElementById("inpt_consumptionunit4") || document.getElementById("inpt_consumptionunit5") || document.getElementById("inpt_consumptionunit6") || document.getElementById("inpt_consumptionunit7"),
		unidad_consumo_flecha: document.getElementById("inpt_consumptionunit4_arrow") || document.getElementById("inpt_consumptionunit5_arrow") || document.getElementById("inpt_consumptionunit6_arrow") || document.getElementById("inpt_consumptionunit7_arrow"),
		popup_lista_lineas: document.getElementById('custitem3_popup_list'),
		var_campos_desactivar: () => {
			obj.bloque_detalle.setAttribute("style", "pointer-events: none;");
			obj.subsidiaria_fs.setAttribute("style", "pointer-events: none;");
			obj.inactivo_fs.setAttribute("style", "pointer-events: none;");
			obj.input_codigo_articulo.setAttribute("style", "pointer-events: none;");
			obj.metodo_costo.setAttribute("style", "pointer-events: none;");
			obj.metodo_costo_flecha.setAttribute("style", "display: none;");
			obj.unidad_consumo.setAttribute("style", "pointer-events: none;");
			obj.unidad_consumo_flecha.setAttribute("style", "display: none;");
		},
		campos_autocompletar: {
			subsidiaria: document.getElementsByName("subsidiary")[0],
			subsidiaria_principal: document.getElementById("row_subsidiary4_0") || document.getElementById("row_subsidiary5_0") || document.getElementById("row_subsidiary6_0") || document.getElementById("row_subsidiary7_0") || document.getElementById("row_subsidiary8_0") || document.getElementById("row_subsidiary9_0") || document.getElementById("row_subsidiary10_0"),
			subsidiaria_biomont: document.getElementById("row_subsidiary4_1") || document.getElementById("row_subsidiary5_1") || document.getElementById("row_subsidiary6_1") || document.getElementById("row_subsidiary7_1") || document.getElementById("row_subsidiary8_1") || document.getElementById("row_subsidiary9_1") || document.getElementById("row_subsidiary10_1"),
			inactivo: document.getElementById("isinactive_fs_inp"),
			metodo_calculo_costo: document.getElementsByName("inpt_costingmethod")[0],
			metodo_calculo_costo_hddn: document.getElementById("hddn_costingmethod6") || document.getElementById("hddn_costingmethod7") || document.getElementById("hddn_costingmethod8") || document.getElementById("hddn_costingmethod9") || document.getElementById("hddn_costingmethod10") || document.getElementById("hddn_costingmethod11"),
			metodo_calculo_costo_indx: document.getElementById("indx_costingmethod6") || document.getElementById("indx_costingmethod7") || document.getElementById("indx_costingmethod8") || document.getElementById("indx_costingmethod9") || document.getElementById("indx_costingmethod10") || document.getElementById("indx_costingmethod11"),
			utiliza_deposito: document.getElementById("usebins_fs_inp"),
			redondear_arriba: document.getElementById("roundupascomponent_fs_inp"),
			redondear_arriba_chk: document.getElementById("roundupascomponent_fs"),
			categoria_costo: document.getElementsByName("inpt_costcategory")[0],
			categoria_costo_hddn: document.getElementById("hddn_costcategory6") || document.getElementById("hddn_costcategory7") || document.getElementById("hddn_costcategory8") || document.getElementById("hddn_costcategory9") || document.getElementById("hddn_costcategory10") || document.getElementById("hddn_costcategory11") || document.getElementById("hddn_costcategory12") || document.getElementById("hddn_costcategory13"),
			categoria_costo_indx: document.getElementById("indx_costcategory6") || document.getElementById("indx_costcategory7") || document.getElementById("indx_costcategory8") || document.getElementById("indx_costcategory9") || document.getElementById("indx_costcategory10") || document.getElementById("indx_costcategory11") || document.getElementById("indx_costcategory12") || document.getElementById("indx_costcategory13"),
			consumo: document.getElementById("custitem_ns_pe_inv_usa_6061_fs_inp"),
			consumo_chk: document.getElementById("custitem_ns_pe_inv_usa_6061_fs"),
			cuenta_compras: document.getElementById("custitem_ns_pe_purchase_acc_60_display"),
			cuenta_compras_hddn: document.getElementById("hddn_custitem_ns_pe_purchase_acc_60_fs"),
			cuenta_variacion: document.getElementById("custitem_ns_pe_variat_acc_61_display"),
			cuenta_variacion_hddn: document.getElementById("hddn_custitem_ns_pe_variat_acc_61_fs"),
			tipo_existencia: document.getElementById("custitem_ns_pe_existen_type_display"),
			tipo_existencia_hddn: document.getElementById("hddn_custitem_ns_pe_existen_type_fs"),
			catalogo_existencia: document.getElementsByName("inpt_custitem_ns_pe_inv_cataog")[0],
			catalogo_existencia_hddn: document.getElementById("hddn_custitem_ns_pe_inv_cataog24") || document.getElementById("hddn_custitem_ns_pe_inv_cataog25") || document.getElementById("hddn_custitem_ns_pe_inv_cataog26") || document.getElementById("hddn_custitem_ns_pe_inv_cataog27") || document.getElementById("hddn_custitem_ns_pe_inv_cataog28") || document.getElementById("hddn_custitem_ns_pe_inv_cataog29") || document.getElementById("hddn_custitem_ns_pe_inv_cataog30") || document.getElementById("hddn_custitem_ns_pe_inv_cataog31") || document.getElementById("hddn_custitem_ns_pe_inv_cataog32") || document.getElementById("hddn_custitem_ns_pe_inv_cataog33") || document.getElementById("hddn_custitem_ns_pe_inv_cataog34") || document.getElementById("hddn_custitem_ns_pe_inv_cataog35") || document.getElementById("hddn_custitem_ns_pe_inv_cataog36") || document.getElementById("hddn_custitem_ns_pe_inv_cataog37") || document.getElementById("hddn_custitem_ns_pe_inv_cataog38") || document.getElementById("hddn_custitem_ns_pe_inv_cataog39") || document.getElementById("hddn_custitem_ns_pe_inv_cataog40") || document.getElementById("hddn_custitem_ns_pe_inv_cataog41"),
			catalogo_existencia_indx: document.getElementById("indx_custitem_ns_pe_inv_cataog24") || document.getElementById("indx_custitem_ns_pe_inv_cataog25") || document.getElementById("indx_custitem_ns_pe_inv_cataog26") || document.getElementById("indx_custitem_ns_pe_inv_cataog27") || document.getElementById("indx_custitem_ns_pe_inv_cataog28") || document.getElementById("indx_custitem_ns_pe_inv_cataog29") || document.getElementById("indx_custitem_ns_pe_inv_cataog30") || document.getElementById("indx_custitem_ns_pe_inv_cataog31") || document.getElementById("indx_custitem_ns_pe_inv_cataog32") || document.getElementById("indx_custitem_ns_pe_inv_cataog33") || document.getElementById("indx_custitem_ns_pe_inv_cataog34") || document.getElementById("indx_custitem_ns_pe_inv_cataog35") || document.getElementById("indx_custitem_ns_pe_inv_cataog36") || document.getElementById("indx_custitem_ns_pe_inv_cataog37") || document.getElementById("indx_custitem_ns_pe_inv_cataog38") || document.getElementById("indx_custitem_ns_pe_inv_cataog39") || document.getElementById("indx_custitem_ns_pe_inv_cataog40") || document.getElementById("indx_custitem_ns_pe_inv_cataog41"),
			metodo_valuacion: document.getElementsByName("inpt_custitem_ns_pe_valuat_method")[0],
			metodo_valuacion_hddn: document.getElementById("hddn_custitem_ns_pe_valuat_method24") || document.getElementById("hddn_custitem_ns_pe_valuat_method25") || document.getElementById("hddn_custitem_ns_pe_valuat_method26") || document.getElementById("hddn_custitem_ns_pe_valuat_method27") || document.getElementById("hddn_custitem_ns_pe_valuat_method28") || document.getElementById("hddn_custitem_ns_pe_valuat_method29") || document.getElementById("hddn_custitem_ns_pe_valuat_method30") || document.getElementById("hddn_custitem_ns_pe_valuat_method31") || document.getElementById("hddn_custitem_ns_pe_valuat_method32") || document.getElementById("hddn_custitem_ns_pe_valuat_method33") || document.getElementById("hddn_custitem_ns_pe_valuat_method34") || document.getElementById("hddn_custitem_ns_pe_valuat_method35") || document.getElementById("hddn_custitem_ns_pe_valuat_method36") || document.getElementById("hddn_custitem_ns_pe_valuat_method37") || document.getElementById("hddn_custitem_ns_pe_valuat_method38") || document.getElementById("hddn_custitem_ns_pe_valuat_method39") || document.getElementById("hddn_custitem_ns_pe_valuat_method40") || document.getElementById("hddn_custitem_ns_pe_valuat_method41") || document.getElementById("hddn_custitem_ns_pe_valuat_method42"),
			metodo_valuacion_indx: document.getElementById("indx_custitem_ns_pe_valuat_method24") || document.getElementById("indx_custitem_ns_pe_valuat_method25") || document.getElementById("indx_custitem_ns_pe_valuat_method26") || document.getElementById("indx_custitem_ns_pe_valuat_method27") || document.getElementById("indx_custitem_ns_pe_valuat_method28") || document.getElementById("indx_custitem_ns_pe_valuat_method29") || document.getElementById("indx_custitem_ns_pe_valuat_method30") || document.getElementById("indx_custitem_ns_pe_valuat_method31") || document.getElementById("indx_custitem_ns_pe_valuat_method32") || document.getElementById("indx_custitem_ns_pe_valuat_method33") || document.getElementById("indx_custitem_ns_pe_valuat_method34") || document.getElementById("indx_custitem_ns_pe_valuat_method35") || document.getElementById("indx_custitem_ns_pe_valuat_method36") || document.getElementById("indx_custitem_ns_pe_valuat_method37") || document.getElementById("indx_custitem_ns_pe_valuat_method38") || document.getElementById("indx_custitem_ns_pe_valuat_method39") || document.getElementById("indx_custitem_ns_pe_valuat_method40") || document.getElementById("indx_custitem_ns_pe_valuat_method41") || document.getElementById("indx_custitem_ns_pe_valuat_method42"),
			unidad_medida: document.getElementById("custitem_ns_pe_unit_med_display"),
			unidad_medida_hddn: document.getElementById("hddn_custitem_ns_pe_unit_med_fs"),
			cod_tipo_existencia: document.getElementById("custitem_ns_pe_cod_existen_type"),
			cod_tipo_existencia_hddn: document.getElementsByName("custitem_ns_pe_cod_existen_type_send")[0],
			cod_inventory_catalog: document.getElementById("custitem_ns_pe_cod_inv_catalog"),
			cod_inventory_catalog_hddn: document.getElementsByName("custitem_ns_pe_cod_inv_catalog_send")[0],
			cod_metodo_valuacion: document.getElementById("custitem_ns_pe_cod_valuat_meth"),
			cod_metodo_valuacion_hddn: document.getElementsByName("custitem_ns_pe_cod_valuat_meth_send")[0],
			cod_unidad_medida: document.getElementById("custitem_ns_pe_cod_unit_med"),
			cod_unidad_medida_hddn: document.getElementsByName("custitem_ns_pe_cod_unit_med_send")[0],
			cod_cubso: document.getElementById("custitem_ns_pe_cod_cubso"),
			cuenta_costo_productos_vendidos: document.getElementsByName("cogsaccount_display")[0],
			cuenta_costo_productos_vendidos_hddn: document.getElementById("hddn_cogsaccount_fs"),
			cuenta_activo: document.getElementsByName("assetaccount_display")[0],
			cuenta_activo_hddn: document.getElementById("hddn_assetaccount_fs"),
			cuenta_ingresos: document.getElementsByName("incomeaccount_display")[0],
			cuenta_ingresos_hddn: document.getElementById("hddn_incomeaccount_fs"),
			programa_fiscal: document.getElementsByName("inpt_taxschedule")[0],
			programa_fiscal_hddn: document.getElementById("hddn_taxschedule24") || document.getElementById("hddn_taxschedule25") || document.getElementById("hddn_taxschedule26") || document.getElementById("hddn_taxschedule27") || document.getElementById("hddn_taxschedule28") || document.getElementById("hddn_taxschedule29") || document.getElementById("hddn_taxschedule30") || document.getElementById("hddn_taxschedule31") || document.getElementById("hddn_taxschedule32") || document.getElementById("hddn_taxschedule33") || document.getElementById("hddn_taxschedule34") || document.getElementById("hddn_taxschedule35") || document.getElementById("hddn_taxschedule36") || document.getElementById("hddn_taxschedule37") || document.getElementById("hddn_taxschedule38") || document.getElementById("hddn_taxschedule39") || document.getElementById("hddn_taxschedule40"),
			programa_fiscal_indx: document.getElementById("indx_taxschedule24") || document.getElementById("indx_taxschedule25") || document.getElementById("indx_taxschedule26") || document.getElementById("indx_taxschedule27") || document.getElementById("indx_taxschedule28") || document.getElementById("indx_taxschedule29") || document.getElementById("indx_taxschedule30") || document.getElementById("indx_taxschedule31") || document.getElementById("indx_taxschedule32") || document.getElementById("indx_taxschedule33") || document.getElementById("indx_taxschedule34") || document.getElementById("indx_taxschedule35") || document.getElementById("indx_taxschedule36") || document.getElementById("indx_taxschedule37") || document.getElementById("indx_taxschedule38") || document.getElementById("indx_taxschedule39") || document.getElementById("indx_taxschedule40"),
		},
		llenar_campos: (linea, unidad) => {
			let _unidad_medida = "";
			let _unidad_medida_hddn = "";
			let _cod_unidad_medida = "";
			switch (unidad) {
				case "UNIDADES":
					_unidad_medida = "Unidad (Bienes)";
					_unidad_medida_hddn = "58";
					_cod_unidad_medida = "NIU";
					break;
				case "LITROS":
					_unidad_medida = "Litro";
					_unidad_medida_hddn = "29";
					_cod_unidad_medida = "LTR";
					break;
				case "KILOS":
					_unidad_medida = "Kilogramo";
					_unidad_medida_hddn = "23";
					_cod_unidad_medida = "KGM";
					break;
				case "METROS":
					_unidad_medida = "Metro";
					_unidad_medida_hddn = "31";
					_cod_unidad_medida = "MTR";
					break;
				default:
					break;
			}

			data_base.find(elemento => {
				if (elemento.linea === linea) {
					obj.campos_autocompletar.subsidiaria.value = elemento.subsidiaria;
					obj.campos_autocompletar.subsidiaria_principal.classList.remove("dropdownSelected");
					obj.campos_autocompletar.subsidiaria_principal.classList.add("dropdownNotSelected");
					obj.campos_autocompletar.subsidiaria_biomont.classList.remove("dropdownNotSelected");
					obj.campos_autocompletar.subsidiaria_biomont.classList.add("dropdownSelected");
					obj.campos_autocompletar.inactivo.checked = elemento.inactivo;
					obj.campos_autocompletar.metodo_calculo_costo.value = elemento.metodo_calculo_costo;
					obj.campos_autocompletar.metodo_calculo_costo_hddn.value = elemento.metodo_calculo_costo_hddn;
					obj.campos_autocompletar.metodo_calculo_costo_indx.value = elemento.metodo_calculo_costo_indx;
					obj.campos_autocompletar.utiliza_deposito.checked = elemento.utiliza_deposito;
					obj.campos_autocompletar.redondear_arriba.checked = elemento.redondear_arriba;
					obj.campos_autocompletar.redondear_arriba_chk.classList.remove(elemento.redondear_arriba_remove);
					obj.campos_autocompletar.redondear_arriba_chk.classList.add(elemento.redondear_arriba_add);
					obj.campos_autocompletar.consumo.checked = elemento.consumo;
					obj.campos_autocompletar.consumo_chk.classList.remove("checkbox_unck");
					obj.campos_autocompletar.consumo_chk.classList.add("checkbox_ck");
					obj.campos_autocompletar.categoria_costo.value = elemento.categoria_costo;
					obj.campos_autocompletar.categoria_costo_hddn.value = elemento.categoria_costo_hddn;
					obj.campos_autocompletar.categoria_costo_indx.value = elemento.categoria_costo_indx;
					obj.campos_autocompletar.cuenta_compras.value = elemento.cuenta_compras;
					obj.campos_autocompletar.cuenta_compras_hddn.value = elemento.cuenta_compras_hddn;
					obj.campos_autocompletar.cuenta_variacion.value = elemento.cuenta_variacion;
					obj.campos_autocompletar.cuenta_variacion_hddn.value = elemento.cuenta_variacion_hddn;
					obj.campos_autocompletar.tipo_existencia.value = elemento.tipo_existencia;
					obj.campos_autocompletar.tipo_existencia_hddn.value = elemento.tipo_existencia_hddn;
					obj.campos_autocompletar.catalogo_existencia.value = elemento.catalogo_existencia;
					obj.campos_autocompletar.catalogo_existencia_hddn.value = elemento.catalogo_existencia_hddn;
					obj.campos_autocompletar.catalogo_existencia_indx.value = elemento.catalogo_existencia_indx;
					obj.campos_autocompletar.metodo_valuacion.value = elemento.metodo_valuacion;
					obj.campos_autocompletar.metodo_valuacion_hddn.value = elemento.metodo_valuacion_hddn;
					obj.campos_autocompletar.metodo_valuacion_indx.value = elemento.metodo_valuacion_indx;
					obj.campos_autocompletar.unidad_medida.value = _unidad_medida;
					obj.campos_autocompletar.unidad_medida_hddn.value = _unidad_medida_hddn;
					obj.campos_autocompletar.cod_tipo_existencia.value = elemento.cod_tipo_existencia;
					obj.campos_autocompletar.cod_inventory_catalog.value = elemento.cod_inventory_catalog;
					obj.campos_autocompletar.cod_metodo_valuacion.value = elemento.cod_metodo_valuacion;
					obj.campos_autocompletar.cod_unidad_medida.value = _cod_unidad_medida;
					obj.campos_autocompletar.cod_cubso.value = elemento.cod_cubso;
					obj.campos_autocompletar.cuenta_costo_productos_vendidos.value = elemento.cuenta_costo_productos_vendidos;
					obj.campos_autocompletar.cuenta_costo_productos_vendidos_hddn.value = elemento.cuenta_costo_productos_vendidos_hddn;
					obj.campos_autocompletar.cuenta_activo.value = elemento.cuenta_activo;
					obj.campos_autocompletar.cuenta_activo_hddn.value = elemento.cuenta_activo_hddn;
					obj.campos_autocompletar.cuenta_ingresos.value = elemento.cuenta_ingresos;
					obj.campos_autocompletar.cuenta_ingresos_hddn.value = elemento.cuenta_ingresos_hddn;
					obj.campos_autocompletar.programa_fiscal.value = elemento.programa_fiscal;
					obj.campos_autocompletar.programa_fiscal_hddn.value = elemento.programa_fiscal_hddn;
					obj.campos_autocompletar.programa_fiscal_indx.value = elemento.programa_fiscal_indx;
				}
			})

			obj.var_campos_desactivar();
		},
		funcReplica: (event, elementMain, arrayElements) => {
			document.getElementsByName(elementMain)[0].addEventListener(event, (e) => {
				arrayElements.forEach((arr) => {
					obj.convertirMayuscula(elementMain);
					obj.convertirMayuscula(arr);
					document.getElementsByName(arr)[0].value = document.getElementsByName(elementMain)[0].value;
				});
			});
		},
		replicaDescripcion: () => {
			["keyup", "blur"].forEach((ev) => {
				obj.funcReplica(ev, "displayname", ["salesdescription", "purchasedescription", "stockdescription"]);
			});
		},
		getNumeroCorrelativo: (num, nomenclatura) => {
			if (nomenclatura.length == 3)
				return `${nomenclatura}${(+num + 1).toString().padStart(7, 0)}`;
			else
				return `${nomenclatura}${(+num + 1).toString().padStart(8, 0)}`;
		},
		getCorrelativoLineaArticulo: () => {
			if (obj.popup_lista_lineas) {
				obj.popup_lista_lineas.addEventListener("click", () => {
					setTimeout(() => {
						if (document.getElementById("inner_popup_div")) {
							document.getElementsByName("st")[0].remove();
							document.getElementById("tr_Search").remove();
							let array_tr = [...document.getElementById("inner_popup_div").childNodes[0].childNodes[1].children];
							let arrayLineas = [];
							data_base.forEach(el => {
								return arrayLineas.push(el.linea);
							});
							let filtrado = array_tr.filter((elemento) => {
								return arrayLineas.includes(elemento.cells[1].innerText);
							});
							document.querySelector("#inner_popup_div table tbody").remove();
							document.querySelector("#inner_popup_div table").appendChild(document.createElement("tbody"));
							filtrado.forEach((elemento) => {
								document.querySelector("#inner_popup_div table tbody").appendChild(elemento);
							});
							array_tr = [...document.getElementById("inner_popup_div").childNodes[0].childNodes[1].children];
							array_tr.forEach((elemento, indice) => {
								elemento.addEventListener("click", () => {
									if (obj.unidad_stock_principal.value === " ") {
										alert("Seleccione la unidad");
										obj.input_linea_articulo.value = "";
										return false;
									}
									obj.display_blocker("Cargando información...");
									const dato = {
										linea: elemento.childNodes[3].childNodes[1].innerText.trim(),
										unidad: obj.unidad_stock_principal.value.trim(),
									};
									fetch(BASE_URL + "/correlativoarticulo/getCorrelativoLineaArticulo", {
										method: "POST",
										headers: {
											"Content-Type":
												"application/x-www-form-urlencoded; charset=UTF-8",
										},
										body: JSON.stringify({ dato: dato }),
									})
										.then((response) => response.json())
										.then((data) => {

											document.getElementById("id-blocker").style.display = "none";
											document.getElementById("id-popup").style.display = "none";

											data_base.forEach(elemento => {
												if (dato.linea === elemento.linea) {

													switch (elemento.linea) {
														case "MATERIAL DE EMPAQUE":
														case "MATERIAL DE ENVASADO":
														case "MATERIA PRIMA":
															if (dato.unidad === "UNIDADES") {
																obj.unidad_compra.value = "MILLARES";
																obj.unidad_compra_hddn.value = "19";
																obj.unidad_compra_indx.value = "1";
															}
															break;
													}

													obj.input_codigo_articulo.value = obj.getNumeroCorrelativo(data.num, data.nomen);
													obj.llenar_campos(dato.linea, dato.unidad);
													obj.input_descripcion_articulo.focus();
												}
											})

										})
										.catch((error) => console.error(error));
								});
							});
						}
					}, 1800);
				});
			}
		},
		display_blocker: (mensaje) => {
			let blocker = document.createElement("div");
			blocker.id = "id-blocker";
			blocker.style.position = "fixed";
			blocker.style.zIndex = "20000";
			blocker.style.top = "0px";
			blocker.style.left = "0px";
			blocker.style.height = "100%";
			blocker.style.width = "100%";
			blocker.style.margin = "5px 0px";
			blocker.style.backgroundColor = "#E0E0E0";
			blocker.style.opacity = "0.6";

			document.getElementsByTagName("body")[0].insertAdjacentElement("afterend", blocker);

			let popup = document.createElement("div");
			popup.id = "id-popup";
			popup.style.position = "fixed";
			popup.style.zIndex = "20001";
			popup.style.top = "40%";
			popup.style.left = "40%";

			let table = document.createElement("table");
			//table.classList.add("uir-popup");
			table.classList.add("uir-popup-header");
			table.width = "250";
			table.cellspacing = "0";
			table.cellpadding = "0";
			let fila_title = document.createElement("tr");
			let fila_body = document.createElement("tr");
			let celda_title = document.createElement("td");
			let celda_body = document.createElement("td");
			celda_body.style.backgroundColor = "white";
			celda_body.height = "50px";
			let mensaje_title = document.createElement("span");
			let mensaje_body = document.createElement("span");
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
		enviar_correo_creacion: (nombre_ejecutor, email_notificacion = [], concepto, accion) => {

			obj.display_blocker("Enviando email...");

			let dato = {
				id_formulario: obj.id_formulario.value,
				codigo_articulo: obj.input_codigo_articulo.value,
				descripcion_articulo: obj.input_descripcion_articulo.value,
				nombre_ejecutor: nombre_ejecutor,
				email_notificacion: ['jpena@biomont.com.pe', 'fcastro@biomont.com.pe'],
				email_notificacion_aux: email_notificacion,     //auxiliar, solo para probar
				linea_articulo: obj.input_linea_articulo.value,
				concepto: concepto,
				accion: accion
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

						alert("El correo se envió correctamente");

					} else {

						alert("Hubo un error en el envío de correo");

					}

				})
				.catch(error => console.error(error));
		},
		enviar_correo: (nombre_ejecutor, email_notificacion = [], concepto, accion) => {

			obj.main_form.addEventListener("submit", (e) => {

				e.preventDefault();

				if (obj.iduser.value === '22150' || obj.iduser.value === '865' || obj.iduser.value === '26526') {

					obj.display_blocker("Enviando email...");

					let dato = {
						id_formulario: obj.id_formulario.value,
						codigo_articulo: obj.input_codigo_articulo.value,
						descripcion_articulo: obj.input_descripcion_articulo.value,
						nombre_ejecutor: nombre_ejecutor.value,
						email_notificacion: ['jpena@biomont.com.pe', 'fcastro@biomont.com.pe'],
						email_notificacion_aux: email_notificacion,     //auxiliar, solo para probar
						linea_articulo: obj.input_linea_articulo.value,
						concepto: concepto,
						accion: accion
					};

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

								if (accion !== 'Revisado') {
									obj.campos_autocompletar.inactivo.checked = false;
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

				} else {
					let revisador = usuarios_registradores.find(usureg => usureg.idusuario == obj.input_id_creador.value);

					if (revisador) {

						if (revisador.idrevisador === document.getElementById('id-input-revision').value) {

							obj.display_blocker("Enviando email...");

							let dato = {
								id_formulario: obj.id_formulario.value,
								codigo_articulo: obj.input_codigo_articulo.value,
								descripcion_articulo: obj.input_descripcion_articulo.value,
								nombre_ejecutor: nombre_ejecutor.value,
								email_notificacion: ['jpena@biomont.com.pe', 'fcastro@biomont.com.pe'],
								email_notificacion_aux: email_notificacion,     //auxiliar, solo para probar
								linea_articulo: obj.input_linea_articulo.value,
								concepto: concepto,
								accion: accion
							};

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

										if (accion !== 'Revisado') {
											obj.campos_autocompletar.inactivo.checked = false;
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

						} else {
							alert('No esta permitido de firmar el registro');
							return false;
						}
					} else {
						alert('No esta permitido de firmar el registro');
						return false;
					}
				}


			})


			/*obj.main_form.addEventListener("submit",(e)=>{

				e.preventDefault();

				obj.display_blocker("Enviando email...");

				//const element_email = document.querySelector('#custitem21_displayval a');

				//const event = new MouseEvent('mouseover', {
				//'view': window,
				//'bubbles': true,
				//'cancelable': true
				//});
				
				//setTimeout(element_email.dispatchEvent(event),500);
				//setTimeout(()=>{
	
				let dato = {
					id_formulario: obj.id_formulario.value,
					codigo_articulo: obj.input_codigo_articulo.value,
					descripcion_articulo: obj.input_descripcion_articulo.value,
					nombre_ejecutor: nombre_ejecutor.value,
					email_notificacion: ['jpena@biomont.com.pe', 'fcastro@biomont.com.pe'],
					email_notificacion_aux: email_notificacion,     //auxiliar, solo para probar
					linea_articulo: obj.input_linea_articulo.value,
					concepto: concepto,
					accion: accion
				};
	
				fetch(BASE_URL+"/correlativoarticulo/sendEmailNotification",{
					method: "POST",
					headers: {
					'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
					},
					body: JSON.stringify({"dato":dato})
				})
				.then((response) => response.json())
				.then((data) => {

					if (data.est == 0) {

						if (accion !== 'Revisado') {
							obj.campos_autocompletar.inactivo.checked = false;
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
	
				//},3000);
				
			});*/
		},
		actualiza_correlativo: () => {
			obj.main_form.addEventListener("submit", (e) => {
				e.preventDefault();

				let array_validation = [
					obj.campos_autocompletar.subsidiaria,
					obj.input_codigo_articulo,
					obj.input_linea_articulo,
					obj.unidad_stock_principal,
					obj.input_descripcion_articulo,
					obj.input_descripcion_venta,
					obj.input_descripcion_compra,
					obj.input_descripcion_stock,
				];

				let new_array_validation = [];

				[...array_validation].filter((elemento, index) => {

					if (elemento.value === "" || elemento.value === " " || elemento.value === "<Type then tab>" || elemento.value === "1") {

						let new_index = "";

						switch (index) {
							case 0:
								new_index = "Subsidiaria BIOMONT";
								break;
							case 1:
								new_index = "Codigo";
								break;
							case 2:
								new_index = "Linea";
								break;
							case 3:
								new_index = "Unidades de Stock";
								break;
							case 4:
								new_index = "Descripcion del Articulo";
								break;
							case 5:
								new_index = "Descripcion de la Venta";
								break;
							case 6:
								new_index = "Descripcion de la Compra";
								break;
							case 7:
								new_index = "Descripcion de Stock";
								break;
						}

						new_array_validation.push(new_index);
					}
				});

				if (new_array_validation.length !== 0) {

					alert(`Por favor ingrese los campos obligatorios:\n-${new_array_validation.join("\n-")}`);
					return false;

				} else {

					let usuario_creador = usuarios_registradores.find(usucreador => usucreador.idusuario === obj.iduser.value);

					if (usuario_creador) {

						let dato = {
							nomenclatura: obj.input_codigo_articulo.value.substring(0, obj.input_codigo_articulo.value.indexOf("0")),
							correlativo_vista: +obj.input_codigo_articulo.value.replace(/[^0-9]+/g, "")
						};

						obj.display_blocker("Actualizando correlativo...");

						fetch(BASE_URL + "/correlativoarticulo/updateCorrelativoLineaArticulo", {
							method: "POST",
							headers: {
								"Content-Type":
									"application/x-www-form-urlencoded; charset=UTF-8",
							},
							body: JSON.stringify({ dato: dato }),
						}
						)
							.then((response) => response.json())
							.then((data) => {
								if (data.res) {

									alert("Correlativo actualizado correctamente");

									let usuario_creador = usuarios_registradores.find(usucreador => usucreador.idusuario === obj.iduser.value);
									let usuario_revisador = usuarios_revisadores.find(usurev => usurev.idusuario === usuario_creador.idrevisador);

									obj.enviar_correo_creacion(usuario_creador.nomusuario, [usuario_revisador.correo], 'Creación', 'Creado');

									obj.main_form.submit();
									return true;

								} else {

									alert("Hubo un error en la actualizacion del correlativo");
									return false;

								}
							})
							.catch((error) => console.error(error));

					} else {

						alert("No esta permitido para crear este registro");
						return false;

					}

				}
			});
		},
		setBotonFirma: (input_nombre_ejecutor, nombre_boton, correos_notificacion, concepto, accion) => {
			const boton = document.createElement('button');
			boton.id = 'id-boton-' + nombre_boton;
			boton.innerHTML = 'Firmar';
			boton.onclick = () => {
				obj.enviar_correo(input_nombre_ejecutor, correos_notificacion, concepto, accion);
			};
			const salto_linea = document.createElement('br');
			input_nombre_ejecutor.insertAdjacentElement('afterend', salto_linea);
			salto_linea.insertAdjacentElement('afterend', boton);
		},
		setInputAux: (input_nombre_ejecutor, nombre_input, valor_input = false) => {
			if (valor_input) {
				const input = document.createElement('input');
				input.id = 'id-input-' + nombre_input;
				//input.type = 'hidden';
				input.value = valor_input;
				input_nombre_ejecutor.insertAdjacentElement('afterend', input);
			}
		},
		msj_error: {
			tb_td_ref_con_top: document.getElementsByTagName("tr")[0],
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
			document.getElementsByName(elemento)[0].addEventListener("input", () => {
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

						obj.input_estado_aprobacion.value = 'PENDIENTE';
						obj.input_estado_aprobacion.setAttribute('style', 'pointer-events: none;');
						obj.input_nombre_revisador.value = '';
						obj.input_nombre_revisador.setAttribute('style', 'pointer-events: none;');
						obj.input_nombre_aprobador.value = '';
						obj.input_nombre_aprobador.setAttribute('style', 'pointer-events: none;');

					}

				})
				.catch((error) => {
					console.error(error);

					obj.msj_conexion();
				});
		},
	};

	if (obj.id_formulario.value === "") {

		console.log("Guardar");

		obj.conexion();

	} else {

		console.log("Editar");
		console.log(obj.idrol.value);
		console.log(obj.iduser.value);

		let usuario_session = '';

		switch (obj.idrol.value) {
			case '1120': //BIO_ROL_CREACION_ARTICULO
			case '1076': //BIO_ROL_CALIDAD
			case '1090': //BIO_ROL_OPERACIONES_PLANTA_ASISTENTE
			case '1066': //BIO_ROL_ID
			case '1065': //BIO_ROL_PRODUCCION
			case '1074': //BIO_ROL_COMERCIAL_ASISTENTE
			case '1069': //BIO_ROL_ALMACEN
			case '1051': //BIO_ROL_CONTABILIDAD_ASISTENTE
			case '1116': //BIO_ROL_CENTRO_EMPLEADOS
			case '1082': //BIO_ROL_ADMINISTRACION
			case '1085': //BIO_ROL_MARKETING_ASISTENTE
			case '1059': //BIO_ROL_FINANZAS_ASISTENTE

				switch (obj.iduser.value) {
					case '1739':    //IVAN REYNA
					case '301':     //EDISON VERA
					case '290':     //MELISSA PIMENTEL
					case '1733':    //ERIKA TACUNAN
					case '283':     //CONSTANTINO POMIANO
					case '274':     //BLANCA ELUGO
					case '285':     //CESAR SUNCION
					case '1817':    //GERIL CASTRO
					case '1802':    //WILMER PINEDO
					case '296':     //PAOLO VICHARRA
					case '319':     //MAGNO REVATTA
					case '276':     //DENIS ALAYO
					case '24738':   //LINCOLN ZAMUDIO
					case '27817':   //JEAN ALCANTARA
					case '1796':    //ROSALIA GARFIAS
					case '170':     //ALBINA YARINGAÑO

						usuario_session = usuarios_revisadores.find(usurev => usurev.idusuario == obj.iduser.value);

						if (obj.input_nombre_revisador.value === '') {

							obj.input_nombre_revisador.value = usuario_session.nomusuario;

							let reportar_revisador = usuarios_revisadores.find(usurev => usurev.nomusuario == obj.input_nombre_revisador.value);

							obj.setInputAux(obj.input_nombre_revisador, 'revision', reportar_revisador.idusuario);

							if (document.getElementById('id-input-revision').value === reportar_revisador.idusuario && obj.input_nombre_aprobador.value === '') {

								obj.input_estado_aprobacion.value = 'REVISADO';
								obj.setBotonFirma(obj.input_nombre_revisador, 'revisar', reportar_revisador.correos_adicionales, 'Revisión', 'Revisado');

							}
						}
						break;
				}
				break;

			case '1080': //BIO_ROL_LOGISTICA_PLANEAMIENTO
			case '1043': //BIO_ROL_LOGISTICA_COMPRADOR
			case '1114': //BIO_ROL_LOGISTICA_SUPERVISOR

				switch (obj.iduser.value) {
					case '22150':   //ANGELO VILCHEZ   
					case '865':     //KEVIN CELESTINO  
					case '26526':   //LILIAN BASUALDO

						usuario_session = ususarios_aprobadores.find(usuaprob => usuaprob.idusuario == obj.iduser.value);

						if (obj.input_nombre_aprobador.value === '') {

							if (obj.input_nombre_revisador.value !== '') {
								obj.input_nombre_aprobador.value = usuario_session.nomusuario;
							}

							let reportar_aprobador = ususarios_aprobadores.find(usuaprob => usuaprob.nomusuario == obj.input_nombre_aprobador.value) || '';

							obj.setInputAux(obj.input_nombre_aprobador, 'aprobacion', reportar_aprobador.idusuario);

							if (document.getElementById('id-input-aprobacion')) {
								if (document.getElementById('id-input-aprobacion').value === reportar_aprobador.idusuario && obj.input_nombre_revisador.value !== '') {
									obj.input_estado_aprobacion.value = 'APROBADO';
									let notificacion_final = usuarios_revisadores.find(usurev => usurev.nomusuario == obj.input_nombre_revisador.value);
									obj.setBotonFirma(obj.input_nombre_aprobador, 'aprobar', notificacion_final.correos_adicionales, 'Aprobación', 'Aprobado');
								}
							}

						}
						break;
				}

				break;

			case '3': //Administrador
				console.log('ADMINISTRADOR');
				break;
		}

		obj.input_estado_aprobacion.setAttribute('style', 'pointer-events: none;');
		obj.input_nombre_revisador.setAttribute('style', 'pointer-events: none;');
		obj.input_nombre_aprobador.setAttribute('style', 'pointer-events: none;');

	}

});
