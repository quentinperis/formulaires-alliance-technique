// Champs de formulaire en fonction du type de transaction 
function showFields() {
  var type = document.getElementById("typeTransaction").value;
  var fields = document.getElementById("dynamicFields");

  if (type === "logo") {
    fields.style.display = "block";
    fields.innerHTML = `
        <div class="form-group">
            <input type="text" id="entreprise" name="entreprise" required placeholder="Nom de l'entreprise">
        </div>
        <div class="form-group">
            <textarea id="description" name="description" required placeholder="Description de l'entreprise et de son activité"></textarea>
        </div>
        <div class="form-group">
            <textarea id="style" name="style" required placeholder="Idées de style ou de direction artistique pour le logo"></textarea>
        </div>
        <div class="form-group">
            <input type="text" id="couleur" name="couleur" required placeholder="Préférences de couleur">
        </div>
        <div class="form-group">
            <input type="text" id="contact" name="contact" required placeholder="Informations de contact">
        </div>
        <div class="form-group">
            <input type="date" id="date" name="date" required placeholder="Date limite de livraison">
        </div>
        <div class="form-group">
        <input type="text" id="montant" name="montant" required placeholder="Montant facturé" pattern="^\d+(\.\d{1,2})?\s*€?$">
        <span id="euroSymbol" style="display:none;">€</span>
</div>

    `;
} else if (type === "site_vitrine") {
    fields.style.display = "block";
    fields.innerHTML = `
        <div class="form-group">
            <input type="text" id="entreprise" name="entreprise" required placeholder="Nom de l'entreprise">
        </div>
        <div class="form-group">
            <input type="text" id="url_site" name="url_site" placeholder="URL du site actuel (s'il existe)">
        </div>
        <div class="form-group">
            <textarea id="objectifs" name="objectifs" required placeholder="Objectifs du nouveau site"></textarea>
        </div>
        <div class="form-group">
            <textarea id="fonctionnalites" name="fonctionnalites" required placeholder="Fonctionnalités souhaitées"></textarea>
        </div>
        <div class="form-group">
            <input type="text" id="design" name="design" required placeholder="Préférences de design">
        </div>
        <div class="form-group">
            <input type="text" id="budget" name="budget" required placeholder="Budget alloué">
        </div>
        <div class="form-group">
            <input type="text" id="contact" name="contact" required placeholder="Informations de contact">
        </div>
        <div class="form-group">
        <input type="text" id="montant" name="montant" required placeholder="Montant facturé" pattern="^\d+(\.\d{1,2})?\s*€?$">
        <span id="euroSymbol" style="display:none;">€</span>
</div>
    `;
} else if (type === "maintenance") {
  fields.style.display = "block";
  fields.innerHTML = `
    <div class="form-group">
      <input type="text" id="entreprise" name="entreprise" required placeholder="Nom de l'entreprise">
    </div>
    <div class="form-group">
      <textarea id="problemes" name="problemes" required placeholder="Description des problèmes ou des mises à jour nécessaires"></textarea>
    </div>
    <div class="form-group">
      <input type="text" id="urgence" name="urgence" required placeholder="Niveau d'urgence">
    </div>
    <div class="form-group">
      <input type="text" id="acces_site" name="acces_site" placeholder="Accès au site (identifiants)">
    </div>
    <div class="form-group">
      <input type="text" id="contact" name="contact" required placeholder="Informations de contact">
    </div>
    <div class="form-group">
      <input type="date" id="date_limite" name="date_limite" required placeholder="Date limite souhaitée pour la résolution">
    </div>
    <div class="form-group">
        <input type="text" id="montant" name="montant" required placeholder="Montant facturé" pattern="^\d+(\.\d{1,2})?\s*€?$">
        <span id="euroSymbol" style="display:none;">€</span>
</div>
  `;
} else if (type === "referencement") {
    fields.style.display = "block";
    fields.innerHTML = `
      <div class="form-group">
        <input type="text" id="entreprise" name="entreprise" required placeholder="Nom de l'entreprise">
      </div>
      <div class="form-group">
        <input type="text" id="url_site" name="url_site" required placeholder="URL du site">
      </div>
      <div class="form-group">
        <textarea id="objectifs" name="objectifs" required placeholder="Objectifs de référencement"></textarea>
      </div>
      <div class="form-group">
        <input type="text" id="mots_cles" name="mots_cles" required placeholder="Mots-clés cibles">
      </div>
      <div class="form-group">
        <input type="text" id="concurrents" name="concurrents" placeholder="Concurrents">
      </div>
      <div class="form-group">
        <input type="text" id="budget" name="budget" required placeholder="Budget alloué">
      </div>
      <div class="form-group">
        <input type="text" id="contact" name="contact" required placeholder="Informations de contact">
      </div>
      <div class="form-group">
        <input type="text" id="montant" name="montant" required placeholder="Montant facturé" pattern="^\d+(\.\d{1,2})?\s*€?$">
        <span id="euroSymbol" style="display:none;">€</span>
</div>
    `;
  } else if (type === "social_ads") {
    fields.style.display = "block";
    fields.innerHTML = `
      <div class="form-group">
        <input type="text" id="entreprise" name="entreprise" required placeholder="Nom de l'entreprise">
      </div>
      <div class="form-group">
        <input type="text" id="plateformes" name="plateformes" required placeholder="Plateformes sociales cibles">
      </div>
      <div class="form-group">
        <textarea id="objectifs" name="objectifs" required placeholder="Objectifs de la campagne publicitaire"></textarea>
      </div>
      <div class="form-group">
        <input type="text" id="budget" name="budget" required placeholder="Budget alloué">
      </div>
      <div class="form-group">
        <input type="text" id="audiences" name="audiences" placeholder="Audiences cibles">
      </div>
      <div class="form-group">
        <input type="text" id="contenu" name="contenu" placeholder="Contenu créatif existant (le cas échéant)">
      </div>
      <div class="form-group">
        <input type="text" id="contact" name="contact" required placeholder="Informations de contact">
      </div>
      <div class="form-group">
        <input type="text" id="montant" name="montant" required placeholder="Montant facturé" pattern="^\d+(\.\d{1,2})?\s*€?$">
        <span id="euroSymbol" style="display:none;">€</span>
</div>
    `;
} else if (type === "video_corporate") {
  fields.style.display = "block";
  fields.innerHTML = `
    <div class="form-group">
      <input type="text" id="entreprise" name="entreprise" required placeholder="Nom de l'entreprise">
    </div>
    <div class="form-group">
      <textarea id="objectifs" name="objectifs" required placeholder="Objectifs de la vidéo"></textarea>
    </div>
    <div class="form-group">
      <textarea id="contenu" name="contenu" required placeholder="Idées de contenu"></textarea>
    </div>
    <div class="form-group">
      <input type="text" id="lieu_tournage" name="lieu_tournage" placeholder="Lieu de tournage prévu">
    </div>
    <div class="form-group">
      <input type="text" id="budget" name="budget" required placeholder="Budget alloué">
    </div>
    <div class="form-group">
      <input type="text" id="contact" name="contact" required placeholder="Informations de contact">
    </div>
    <div class="form-group">
      <input type="date" id="date_tournage" name="date_tournage" required placeholder="Date de tournage souhaitée">
    </div>
    <div class="form-group">
        <input type="text" id="montant" name="montant" required placeholder="Montant facturé" pattern="^\d+(\.\d{1,2})?\s*€?$">
        <span id="euroSymbol" style="display:none;">€</span>
</div>
  `;
} else if (type === "site_e_commerce") {
  fields.style.display = "block";
  fields.innerHTML = `
    <div class="form-group">
      <input type="text" id="entreprise" name="entreprise" required placeholder="Nom de l'entreprise">
    </div>
    <div class="form-group">
      <textarea id="description_produits" name="description_produits" required placeholder="Description des produits à vendre"></textarea>
    </div>
    <div class="form-group">
      <textarea id="fonctionnalites" name="fonctionnalites" required placeholder="Fonctionnalités requises"></textarea>
    </div>
    <div class="form-group">
      <input type="text" id="design" name="design" required placeholder="Préférences de design">
    </div>
    <div class="form-group">
      <input type="text" id="budget" name="budget" required placeholder="Budget alloué">
    </div>
    <div class="form-group">
      <input type="text" id="contact" name="contact" required placeholder="Informations de contact">
    </div>
    <div class="form-group">
      <input type="date" id="date_limite" name="date_limite" required placeholder="Date limite souhaitée">
    </div>
    <div class="form-group">
        <input type="text" id="montant" name="montant" required placeholder="Montant facturé" pattern="^\d+(\.\d{1,2})?\s*€?$">
        <span id="euroSymbol" style="display:none;">€</span>
</div>
  `;
} else if (type === "google_ads") {
  fields.style.display = "block";
  fields.innerHTML = `
    <div class="form-group">
      <input type="text" id="entreprise" name="entreprise" required placeholder="Nom de l'entreprise">
    </div>
    <div class="form-group">
      <textarea id="objectifs" name="objectifs" required placeholder="Objectifs de la campagne"></textarea>
    </div>
    <div class="form-group">
      <textarea id="mots_cles" name="mots_cles" required placeholder="Mots-clés cibles"></textarea>
    </div>
    <div class="form-group">
      <input type="text" id="budget" name="budget" required placeholder="Budget alloué">
    </div>
    <div class="form-group">
      <input type="text" id="dates_campagne" name="dates_campagne" required placeholder="Dates de début et de fin de la campagne">
    </div>
    <div class="form-group">
      <input type="text" id="contact" name="contact" required placeholder="Informations de contact">
    </div>
    <div class="form-group">
        <input type="text" id="montant" name="montant" required placeholder="Montant facturé" pattern="^\d+(\.\d{1,2})?\s*€?$">
        <span id="euroSymbol" style="display:none;">€</span>
</div>
  `;
}

else {
      fields.style.display = "none";
  }
}
