/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 */
define(['N'],

    (N) => {

        const { email, record, runtime } = N;

        /**
         * Defines the function definition that is executed after record is submitted.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {Record} scriptContext.oldRecord - Old record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @since 2015.2
         */
        const afterSubmit = (scriptContext) => {

            if (scriptContext.type === scriptContext.UserEventType.CREATE) {

                // Obtiene los datos del usuario actual
                var currentUser = runtime.getCurrentUser();

                // Obtiene los campos del objeto que se ha creado
                var newRecord = scriptContext.newRecord;
            
                // Obtiene el nombre de creador del registro
                var destinatarios = [];
                var nombre_creador = currentUser.name;
                var codigo_articulo = newRecord.getValue({ fieldId: 'itemid' });
                var descripcion_articulo = newRecord.getValue({ fieldId: 'displayname' });
                var linea_articulo = newRecord.getValue({ fieldId: 'custitem3' });
                var estado_articulo = newRecord.getValue({ fieldId: 'custitem_articulo_estado_creacion' });

                // Obtiene la referencia de los campos de la linea
                var referenciaLinea = record.load({ type: 'customlist1334',  id: linea_articulo });
                // Obtiene un campo específico del registro utilizando un índice
                var campoLinea = referenciaLinea.getFields()[10]; // Esto obtiene el decimo campo del registro
                // Obtiene el valor del campo
                var valorLinea = referenciaLinea.getValue({ fieldId: campoLinea });

                var copia_usuario = currentUser.id;
                copia_usuario = 22150;

                // Evalua el id del usuario actual para llenar el array destinatarios
                //switch(currentUser.id){
                switch(copia_usuario){
                    case 136:   // JUAN PEÑA
                    case 164:   // FRANK CASTRO   
                        destinatarios = ['jpena@biomont.com.pe', 'juanpm32@gmail.com','fcastro@biomont.com.pe'];
                        break;
                    case 22150: // ANGELO VILCHEZ
                    case 865:   // KEVIN CELESTINO
                    case 26526: // LILIAN BASUALDO
                        destinatarios = ['avilchez@biomont.com.pe', 'kcelestino@biomont.com.pe', 'lbasualdo@biomont.com.pe'];
                        break;
                    case 1746:  // JOE PIZARRO
                        destinatarios = ['ireyna@biomont.com.pe', 'jpizarro@biomont.com.pe'];
                        break;
                    case 298:   // KARIN MUGA
                    case 300:   // LIZ GOMEZ
                    case 1756:  // LIZET ALFARO
                    case 303:   // SUSAN ELIAS
                        destinatarios = ['evera@biomont.com.pe', 'kmuga@biomont.com.pe', 'lgomez@biomont.com.pe', 'analistascc@biomont.com.pe', 'selias@biomont.com.pe', 'dguzman@Biomont.com.pe'];
                        break;
                    case 290:   // MELISSA PIMENTEL
                    case 27348: // SERGIO RODRIGUEZ
                        destinatarios = ['mantenimiento@biomont.com.pe', 'srodriguez@biomont.com.pe', 'mantenimiento.adm@biomont.com.pe'];
                        break;
                    case 22186: // MICHAEL OLLERO
                    case 22197: // ANABELL CAMPOS
                    case 312:   // YOZELY SOTO
                        destinatarios = ['mantenimiento@biomont.com.pe', 'srodriguez@biomont.com.pe', 'mantenimiento.adm@biomont.com.pe'];
                        break;
                    case 295:   // MARY MIRANDA
                        destinatarios = ['cpomiano@biomont.com.pe', 'mmiranda@biomont.com.pe'];
                        break;
                    case 22194: // ALEXANDRA DURAND
                        destinatarios = ['dalayo@biomont.com.pe', 'adurand@Biomont.com.pe'];
                        break;
                    case 274:   // BLANCA ELUGO
                        destinatarios = ['belugo@biomont.com.pe'];
                        break;
                    case 319:   // MAGNO LUCIO REVATTA
                        destinatarios = ['ti@biomont.com.pe'];
                        break;
                    case 296:   // PAOLO VICHARRA
                        destinatarios = ['pvicharra@Biomont.com.pe'];
                        break;
                    case 1802:  // WILMER PINEDO
                    case 1817:  // GERIL CASTRO
                        destinatarios = ['gcastro@biomont.com.pe', 'wpinedo@biomont.com.pe'];
                        break;
                    case 285:   // CESAR SUNCION
                        destinatarios = ['csuncion@biomont.com.pe'];
                        break;
                    case 24738: // LINCOLN ZAMUDIO
                    case 27817: // JEAN ALCANTARA
                    case 1796:  // ROSALIA GARFIAS
                        destinatarios = ['lzamudio@biomont.com.pe', 'jalcantara@biomont.com.pe', 'rgarfias@biomont.com.pe', 'pliviac@biomont.com.pe'];
                        break;
                    case 170:   // ALBINA YARINGAÑO
                        destinatarios = ['ayaringano@biomont.com.pe'];
                        break;
                }

                var correos = "";
                destinatarios.forEach(elemento => {
                    return correos = correos + `<p>${elemento}</p>`;
                });

                var emailBody = `
                    <html>
                        <body>
                            <div>
                                <h1 style='color:#45556E;'>Notificación de NetSuite</h1>
                                <table>
                                    <tr>
                                        <td>Buen día:</td>
                                    </tr>
                                    <tr>
                                        <td>El usuario <b>${nombre_creador}</b> </strong> ha Creado <strong> un Artículo</strong> en el Sistema NetSuite.</td>
                                    </tr>
                                </table>
                                <br><br>
                                <table>
                                    <tr>
                                        <td><strong>Concepto</strong></td>
                                        <td>:</td>
                                        <td><span>Creación de Artículo (${estado_articulo})</span></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Código</strong></td>
                                        <td>:</td>
                                        <td>${codigo_articulo}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Descripción</strong></td>
                                        <td>:</td>
                                        <td>${descripcion_articulo}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Línea</strong></td>
                                        <td>:</td>
                                        <td>${valorLinea}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Link de Registro</strong></td>
                                        <td>:</td>
                                        <td><a href='https://6462530-sb1.app.netsuite.com/app/common/item/item.nl?id=${newRecord.id}' target='_blank'>Ver registro</a></td>
                                    </tr>
                                </table>			
                                <br><br>
                                ${correos}
                                <table>
                                    <tr>
                                        <td><h1 style='color:#45556E;'>Atentamente</h1></td>
                                    </tr>
                                    <tr>
                                        <td><h1 style='color:#45556E;'>Notificaciones NetSuite</h1></td>
                                    </tr>
                                </table>
                            </div>
                        </body>
                    </html>
                `;

                email.send({
                    author: currentUser.id,
                    recipients: [136, 164], //destinatarios,
                    subject: 'Notificación de Creación de Artículo - Sistema NetSuite',
                    body: emailBody
                });

            }
        }

        return { afterSubmit }

    });
