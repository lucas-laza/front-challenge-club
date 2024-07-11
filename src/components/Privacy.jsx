import Footer from "./Footer";
import Navbar from "./NavBar";

export default function Privacy(){
    return(
        <div>
            <Navbar/>
            <div class="container mb-5">
                <h2 class="my-4">Charte de Confidentialité</h2>

                <p>Bienvenue sur le site du Club de Tennis de Table de Lille. Nous attachons une grande importance à la protection de vos données personnelles. Cette charte de confidentialité vous informe sur la manière dont nous collectons, utilisons et protégeons vos informations personnelles lorsque vous utilisez notre site.</p>

                <h3 class="mt-4">1. Collecte des Informations</h3>
                <p>Nous collectons des informations lorsque vous créez un compte sur notre site pour vous inscrire à des événements et consulter des nouveautés. Les informations collectées incluent :</p>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Nom et prénom</li>
                    <li class="list-group-item">Adresse email</li>
                    <li class="list-group-item">Numéro de téléphone</li>
                    <li class="list-group-item">Informations sur les événements auxquels vous vous inscrivez</li>
                </ul>

                <h3 class="mt-4">2. Utilisation des Informations</h3>
                <p>Les informations que nous collectons auprès de vous peuvent être utilisées pour :</p>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Gérer votre compte utilisateur</li>
                    <li class="list-group-item">Vous inscrire aux événements</li>
                    <li class="list-group-item">Vous envoyer des mises à jour et des nouvelles du club</li>
                    <li class="list-group-item">Améliorer notre site et nos services</li>
                </ul>

                <h3 class="mt-4">3. Protection des Informations</h3>
                <p>Nous mettons en œuvre diverses mesures de sécurité pour protéger vos informations personnelles. Vos informations personnelles sont contenues derrière des réseaux sécurisés et ne sont accessibles qu'à un nombre limité de personnes ayant des droits d'accès spéciaux à ces systèmes, et sont tenues de maintenir la confidentialité des informations.</p>

                <h3 class="mt-4">4. Divulgation à des Tiers</h3>
                <p>Nous ne vendons, n'échangeons et ne transférons pas vos informations personnelles à des tiers, sauf si nous avons obtenu votre consentement préalable, ou que cela est nécessaire pour respecter la loi, faire respecter nos politiques de site, ou protéger nos droits, propriété ou sécurité.</p>

                <h3 class="mt-4">5. Consentement</h3>
                <p>En utilisant notre site, vous consentez à notre charte de confidentialité.</p>

                <h3 class="mt-4">6. Modifications de notre Charte de Confidentialité</h3>
                <p>Nous nous réservons le droit de modifier cette charte de confidentialité à tout moment. En cas de modification, nous publierons les changements sur cette page et mettrons à jour la date de modification ci-dessous.</p>

                <p class="font-italic">Date de dernière modification : 11 juillet 2024</p>

                <h3 class="mt-4">7. Contactez-nous</h3>
                <p>Si vous avez des questions concernant cette charte de confidentialité, vous pouvez nous contacter à l'adresse suivante :</p>
                <p>Email : <a href="mailto:contact@tennisdetablelille.fr">contact@tennisdetablelille.fr</a></p>
                <p>Adresse : 123 Rue de Lille, 59000 Lille, France</p>
            </div>

            <Footer/>
        </div>
    )
}