import { PDFDownloadLink, Document, Page, View, Text, Image, PDFViewer, StyleSheet, Font } from "@react-pdf/renderer";
import { useUser } from "../context/Context.js"
import { useState, useRef, useEffect } from 'react'
import Button from './Button'
Font.register({ family: "Inter", src: "/assets/font.otf" })

const styles = StyleSheet.create({
    body: {
        padding: "10px",
        paddingTop: "0px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        backgroundColor: "#ffffff",
        fontSize: "8px",
        fontWeight: "100"
    },
    subtitle: {
        width: "100%",
        position: "relative",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#294B98",
        color: "#f2f2f2",
        padding: "1px 100px",
        margin: "16px 0",

    },


    containerIntroItems: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#38569c",
    },
    introImg: {
        width: "100%",
    },
    logo: {
        height: "auto",
        width: "150px",
        marginLeft: "35px"
    },
    introItems: {
        width: "100%",
    },
    items: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    introViewKeyValue: {
        width: "100%",
        display: "flex",
        flexDirection: "row"
    },
    viewKeyValue: {
        width: "50%",
        display: "flex",
        flexDirection: "row"
    },
    key: {
        margin: "0px",
        width: "50%",
        padding: "2px 5px 0px 5px ",
        border: "1px solid #294B98",
        backgroundColor: "#294B98",
        color: "#f2f2f2",
        fontSize: "8px",
        fontWeight: "100"

    },
    value: {
        width: "50%",
        padding: "2px 5px 0px 5px ",
        border: "0.5px solid #294B98",
        color: "#000000",
        fontSize: "8px",
        fontWeight: "100"

    },
    viewKeyValueTwo: {
        width: "100%",
        display: "flex",
        flexDirection: "row"
    },



})






const PDFView = () => {
    const { pdfData } = useUser()

    const [isCliente, setisCliente] = useState(false);
    console.log(pdfData)


    useEffect(() => {
        setisCliente(true)
    }, []);


    return (
        <div>
            {isCliente && <PDFDownloadLink document={
                <Document>
                    <Page style={styles.body} >
                        <Text style={styles.subtitle}>COTIZACIÓN TRANSPORTE </Text>
                        <View style={styles.containerIntroItems}>
                            <View style={styles.introImg}>
                                <Image style={styles.logo} src="/logo.png" />
                            </View>
                            <View style={styles.introItems}>
                                <View style={styles.introViewKeyValue}>
                                    <Text style={styles.key}>COTIZACIÓN No</Text>
                                    <Text style={styles.value}>{pdfData && pdfData["COTIZACIÓN No"] && pdfData["COTIZACIÓN No"]}</Text>
                                </View>
                                <View style={styles.introViewKeyValue}>
                                    <Text style={styles.key}>FECHA</Text>
                                    <Text style={styles.value}>{pdfData && pdfData["FECHA"] && pdfData["FECHA"]}</Text>
                                </View>
                                <View style={styles.introViewKeyValue}>
                                    <Text style={styles.key}>VALIDEZ</Text>
                                    <Text style={styles.value}>{pdfData && pdfData["VALIDEZ"] && pdfData["VALIDEZ"]}</Text>
                                </View>
                            </View>
                        </View>

                        <Text style={styles.subtitle}>DATOS DE CLIENTE</Text>

                        <View style={styles.items}>
                            <View style={styles.viewKeyValue}>
                                <Text style={styles.key}>NOMBRE</Text>
                                <Text style={styles.value}>{pdfData && pdfData["nombre"] && pdfData["nombre"]}</Text>
                            </View>
                            <View style={styles.viewKeyValue}>
                                <Text style={styles.key}>CORREO</Text>
                                <Text style={styles.value}>{pdfData && pdfData["correo"] && pdfData["correo"]}</Text>
                            </View>
                            <View style={styles.viewKeyValue}>
                                <Text style={styles.key}>EMPRESA</Text>
                                <Text style={styles.value}>{pdfData && pdfData["empresa"] && pdfData["empresa"]}</Text>
                            </View>
                            <View style={styles.viewKeyValue}>
                                <Text style={styles.key}>TELEFONO</Text>
                                <Text style={styles.value}>{pdfData && pdfData["telefono"] && pdfData["telefono"]}</Text>
                            </View>
                            <View style={styles.viewKeyValue}>
                                <Text style={styles.key}>CARGO</Text>
                                <Text style={styles.value}>{pdfData && pdfData["cargo"] && pdfData["cargo"]}</Text>
                            </View>
                            <View style={styles.viewKeyValue}>
                                <Text style={styles.key}>CIUDAD</Text>
                                <Text style={styles.value}>{pdfData && pdfData["ciudad"] && pdfData["ciudad"]}</Text>
                            </View>
                        </View>

                        <Text style={styles.subtitle}>DESCRIPCION DE LA CARGA</Text>
                        <View style={styles.items}>
                            <View style={styles.viewKeyValue}>
                                <Text style={styles.key}>MERCANCIA</Text>
                                <Text style={styles.value}>{pdfData && pdfData["CT-MERCANCIA"] && pdfData["CT-MERCANCIA"]}</Text>
                            </View>
                            <View style={styles.viewKeyValue}>
                                <Text style={styles.key}>*TIPO DE CARGA</Text>
                                <Text style={styles.value}>{pdfData && pdfData["CT-TIPO DE CARGA"] && pdfData["CT-TIPO DE CARGA"]}</Text>
                            </View>
                            <View style={styles.viewKeyValue}>
                                <Text style={styles.key}>EMPAQUE</Text>
                                <Text style={styles.value}>{pdfData && pdfData["CT-EMPAQUE"] && pdfData["CT-EMPAQUE"]}</Text>
                            </View>
                            <View style={styles.viewKeyValue}>
                                <Text style={styles.key}>*VOLUMEN M3</Text>
                                <Text style={styles.value}>{pdfData && pdfData["CT-VOLUMEN M3"] && pdfData["CT-VOLUMEN M3"]}</Text>
                            </View>
                            <View style={styles.viewKeyValue}>
                                <Text style={styles.key}>*PESO TN</Text>
                                <Text style={styles.value}>{pdfData && pdfData["CT-PESO TN"] && pdfData["CT-PESO TN"]}</Text>
                            </View>
                            <View style={styles.viewKeyValue}>
                                <Text style={styles.key}>*CANTIDAD</Text>
                                <Text style={styles.value}>{pdfData && pdfData["CT-CANTIDAD"] && pdfData["CT-CANTIDAD"]}</Text>
                            </View>
                            <View style={styles.viewKeyValue}>
                                <Text style={styles.key}>INCOTERM</Text>
                                <Text style={styles.value}>{pdfData && pdfData["CT-INCOTERM"] && pdfData["CT-INCOTERM"]}</Text>
                            </View>
                            <View style={styles.viewKeyValue}>
                                <Text style={styles.key}>MODALIDAD</Text>
                                <Text style={styles.value}>{pdfData && pdfData["CT-MODALIDAD"] && pdfData["CT-MODALIDAD"]}</Text>
                            </View>
                        </View>

                        <Text style={styles.subtitle}>DETALLES DEL SERVICIO</Text>
                        <View style={styles.items}>
                            <View style={styles.viewKeyValue}>
                                <Text style={styles.key}>*SERVICIO</Text>
                                <Text style={styles.value}>{pdfData && pdfData["CT-SERVICIO"] && pdfData["CT-SERVICIO"]}</Text>
                            </View>
                            <View style={styles.viewKeyValue}>
                                <Text style={styles.key}>*TIPO DE UNIDAD</Text>
                                <Text style={styles.value}>{pdfData && pdfData["CT-TIPO DE UNIDAD"] && pdfData["CT-TIPO DE UNIDAD"]}</Text>
                            </View>
                            <View style={styles.viewKeyValue}>
                                <Text style={styles.key}>*ORIGEN</Text>
                                <Text style={styles.value}>{pdfData && pdfData["CT-ORIGEN"] && pdfData["CT-ORIGEN"]}</Text>
                            </View>
                            <View style={styles.viewKeyValue}>
                                <Text style={styles.key}>*DESTINO</Text>
                                <Text style={styles.value}>{pdfData && pdfData["CT-DESTINO"] && pdfData["CT-DESTINO"]}</Text>
                            </View>
                            <View style={styles.viewKeyValue}>
                                <Text style={styles.key}>*CANTIDAD</Text>
                                <Text style={styles.value}>{pdfData && pdfData["CT-CANTIDAD"] && pdfData["CT-CANTIDAD"]}</Text>
                            </View>

                            <View style={styles.viewKeyValue}>
                                <Text style={styles.key}>*MONEDA</Text>
                                <Text style={styles.value}>{pdfData && pdfData["CT-MONEDA"] && pdfData["CT-MONEDA"]}</Text>
                            </View>
                        </View>

                        <Text style={styles.subtitle}>TARIFA</Text>
                        <View style={styles.viewKeyValueTwo}>
                            <Text style={styles.key}>DETALLE</Text>
                            <Text style={styles.key}>FLETE UNITARIO</Text>
                            <Text style={styles.key}>CANTIDAD</Text>
                            <Text style={styles.key}>FLETE TOTAL</Text>
                        </View>




                        {
                            pdfData.tarifa && pdfData.tarifa.map((i, index) => {
                                return (

                                    <View style={styles.viewKeyValueTwo} key={index}>
                                        <Text style={styles.value}>{pdfData && pdfData[`DETALLEFLETE${index}`] && pdfData[`DETALLEFLETE${index}`]}</Text>
                                        <Text style={styles.value}>{pdfData && pdfData[`FLETEUNITARIO${index}`] && pdfData[`FLETEUNITARIO${index}`]}</Text>
                                        <Text style={styles.value}>{pdfData && pdfData[`CANTIDADFLETE${index}`] && pdfData[`CANTIDADFLETE${index}`]}</Text>
                                        <Text style={styles.value}>{pdfData && pdfData[`PRODUCTFLETE${index}`] && pdfData[`PRODUCTFLETE${index}`]}</Text>
                                    </View>


                                )
                            })
                        }


                        <Text style={styles.subtitle}>OTROS GASTOS</Text>
                        <View style={styles.viewKeyValueTwo}>
                            <Text style={styles.key}>DETALLE</Text>
                            <Text style={styles.key}>COSTO UNITARIO</Text>
                            <Text style={styles.key}>CANTIDAD</Text>
                            <Text style={styles.key}>COSTO TOTAL</Text>
                        </View>



                        {
                            pdfData.otrosGastos && pdfData.otrosGastos.map((i, index) => {
                                return (

                                    <View style={styles.viewKeyValueTwo} key={index}>


                                        <Text style={styles.value}>{pdfData && pdfData[`DETALLE${index}`] && pdfData[`DETALLE${index}`]}</Text>
                                        <Text style={styles.value}>{pdfData && pdfData[`FLETEUNITARIO${index}`] && pdfData[`FLETEUNITARIO${index}`]}</Text>
                                        <Text style={styles.value}>{pdfData && pdfData[`CANTIDADFLETE${index}`] && pdfData[`CANTIDADFLETE${index}`]}</Text>
                                        <Text style={styles.value}>{pdfData && pdfData[`PRODUCTFLETE${index}`] && pdfData[`PRODUCTFLETE${index}`]}</Text>




                                    </View>


                                )
                            })
                        }




                        <Text style={styles.subtitle}>EXCLUYE</Text>
                        {
                            pdfData.excluye && pdfData.excluye.map((i, index) => {
                                return (

                                    <View key={index}>
                                        <Text></Text>
                                    </View>
                                )
                            })
                        }

                    </Page>
                </Document>}
                fileName='Cotizacion Terrestre'>


                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button style={'buttonSecondary'}>pdf</Button>
                </div>

            </PDFDownloadLink>}
        </div>
    )
}


export default PDFView