import { createClient } from "soap";

export async function GET() {
  return new Promise((resolve, reject) => {
    createClient("https://dpdservicesdemo.dpd.com.pl/DPDPackageObjServicesService/DPDPackageObjServices?WSDL", (err, client) => {
      if (err) {
        reject(new Response(JSON.stringify({ error: err.message }), { status: 500 }));
      } else {
        const args = {
          postalCodeV1: {
            countryCode: "PL",
            zipCode: "62030"
          },
          authDataV1: {
            login: "test",
            masterFid: "1495",
            password: "thetu4Ee"
          }
        };

        client.findPostalCodeV1(args, (err, res) => {
          if (err) {
            reject(new Response(JSON.stringify({ error: err.message }), { status: 500 }));
          } else {
            resolve(new Response(JSON.stringify(res), { status: 200 }));
          }
        });
      }
    });
  });
}
