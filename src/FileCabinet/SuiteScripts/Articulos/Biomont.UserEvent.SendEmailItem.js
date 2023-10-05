/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 */
define(['N'],
    /**
 * @param{email} email
 * @param{record} record
 * @param{runtime} runtime
 */
    (N) => {

        const { email } = N;
        const { record } = N;
        const { runtime } = N;
        /**
         * Defines the function definition that is executed after record is submitted.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {Record} scriptContext.oldRecord - Old record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @since 2015.2
         */
        const afterSubmit = (scriptContext) => {
            if (scriptContext.type !== scriptContext.UserEventType.CREATE) {
                return;
            }

            var user = runtime.getCurrentUser();
            // Obtener el ID del usuario actual
            var currentUser = user.id;

            // Verificar el ID de usuario y definir destinatarios y contenido del correo
            var recipients = [];
            var itemid = scriptContext.newRecord.getValue({ fieldId: 'itemid' });
            var displayname = scriptContext.newRecord.getValue({ fieldId: 'displayname' });
            var custitem3 = scriptContext.newRecord.getValue({ fieldId: 'custitem3' });

            if (currentUser === '136') {
                recipients = ['jpena@biomont.com.pe', 'fcastro@biomont.com.pe'];
            } else if (currentUser === '26526') {
                recipients = ['jpena@biomont.com.pe', 'juanpm32@gmail.com'];
            }

            if (recipients.length > 0) {
                var emailSubject = 'Nuevo item registrado';
                var emailBody = `
                    <html>
                    <body>
                        <p>Detalles del nuevo item:</p>
                        <p><strong>Codigo:</strong> ${itemid}</p>
                        <p><strong>Descripcion:</strong> ${displayname}</p>
                        <p><strong>Linea:</strong> ${custitem3}</p>
                    </body>
                    </html>
                `;

                email.send({
                    author: currentUser,
                    recipients: recipients.join(','),
                    subject: emailSubject,
                    body: emailBody,
                    isHtml: true
                });


            }


            /*email.send({
                author: 136,
                recipients: 136, // [26883, 136]
                subject: 'User has edited a billied order',
                body: 'Prueba de envio de correo'
            });*/
        }

        return { afterSubmit }

    });
