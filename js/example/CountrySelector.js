define(["dojo/_base/declare",
        "dojo/store/Memory",
        "dijit/form/FilteringSelect",
        "dijit/form/ValidationTextBox",
        "dojo/i18n!example/nls/countries"],
    function(declare, Memory, FilteringSelect, ValidationTextBox, i18n) {
        var countryStore = new Memory({
            data: [
                { name: i18n.usName, id: i18n.usCode },
                { name: i18n.afName, id: i18n.afCode },
                { name: i18n.axName, id: i18n.axCode },
                { name: i18n.alName, id: i18n.alCode },
                { name: i18n.dzName, id: i18n.dzCode },
                { name: i18n.asName, id: i18n.asCode },
                { name: i18n.adName, id: i18n.adCode },
                { name: i18n.aoName, id: i18n.aoCode },
                { name: i18n.aiName, id: i18n.aiCode },
                { name: i18n.aqName, id: i18n.aqCode },
                { name: i18n.agName, id: i18n.agCode },
                { name: i18n.arName, id: i18n.arCode },
                { name: i18n.amName, id: i18n.amCode },
                { name: i18n.awName, id: i18n.awCode },
                { name: i18n.auName, id: i18n.auCode },
                { name: i18n.atName, id: i18n.atCode },
                { name: i18n.azName, id: i18n.azCode },
                { name: i18n.bsName, id: i18n.bsCode },
                { name: i18n.bhName, id: i18n.bhCode },
                { name: i18n.bdName, id: i18n.bdCode },
                { name: i18n.bbName, id: i18n.bbCode },
                { name: i18n.byName, id: i18n.byCode },
                { name: i18n.beName, id: i18n.beCode },
                { name: i18n.bzName, id: i18n.bzCode },
                { name: i18n.bjName, id: i18n.bjCode },
                { name: i18n.bmName, id: i18n.bmCode },
                { name: i18n.btName, id: i18n.btCode },
                { name: i18n.boName, id: i18n.boCode },
                { name: i18n.bqName, id: i18n.bqCode },
                { name: i18n.baName, id: i18n.baCode },
                { name: i18n.bwName, id: i18n.bwCode },
                { name: i18n.bvName, id: i18n.bvCode },
                { name: i18n.brName, id: i18n.brCode },
                { name: i18n.ioName, id: i18n.ioCode },
                { name: i18n.bnName, id: i18n.bnCode },
                { name: i18n.bgName, id: i18n.bgCode },
                { name: i18n.bfName, id: i18n.bfCode },
                { name: i18n.biName, id: i18n.biCode },
                { name: i18n.khName, id: i18n.khCode },
                { name: i18n.cmName, id: i18n.cmCode },
                { name: i18n.caName, id: i18n.caCode },
                { name: i18n.cvName, id: i18n.cvCode },
                { name: i18n.kyName, id: i18n.kyCode },
                { name: i18n.cfName, id: i18n.cfCode },
                { name: i18n.cuName, id: i18n.cuCode },
                { name: i18n.tdName, id: i18n.tdCode },
                { name: i18n.clName, id: i18n.clCode },
                { name: i18n.cnName, id: i18n.cnCode },
                { name: i18n.cxName, id: i18n.cxCode },
                { name: i18n.ccName, id: i18n.ccCode },
                { name: i18n.coName, id: i18n.coCode },
                { name: i18n.kmName, id: i18n.kmCode },
                { name: i18n.cgName, id: i18n.cgCode },
                { name: i18n.cdName, id: i18n.cdCode },
                { name: i18n.ckName, id: i18n.ckCode },
                { name: i18n.crName, id: i18n.crCode },
                { name: i18n.ciName, id: i18n.ciCode },
                { name: i18n.hrName, id: i18n.hrCode },
                { name: i18n.cwName, id: i18n.cwCode },
                { name: i18n.cyName, id: i18n.cyCode },
                { name: i18n.czName, id: i18n.czCode },
                { name: i18n.dkName, id: i18n.dkCode },
                { name: i18n.djName, id: i18n.djCode },
                { name: i18n.dmName, id: i18n.dmCode },
                { name: i18n.doName, id: i18n.doCode },
                { name: i18n.ecName, id: i18n.ecCode },
                { name: i18n.egName, id: i18n.egCode },
                { name: i18n.svName, id: i18n.svCode },
                { name: i18n.gqName, id: i18n.gqCode },
                { name: i18n.erName, id: i18n.erCode },
                { name: i18n.eeName, id: i18n.eeCode },
                { name: i18n.etName, id: i18n.etCode },
                { name: i18n.fkName, id: i18n.fkCode },
                { name: i18n.foName, id: i18n.foCode },
                { name: i18n.fjName, id: i18n.fjCode },
                { name: i18n.fiName, id: i18n.fiCode },
                { name: i18n.frName, id: i18n.frCode },
                { name: i18n.gfName, id: i18n.gfCode },
                { name: i18n.pfName, id: i18n.pfCode },
                { name: i18n.tfName, id: i18n.tfCode },
                { name: i18n.gaName, id: i18n.gaCode },
                { name: i18n.gmName, id: i18n.gmCode },
                { name: i18n.geName, id: i18n.geCode },
                { name: i18n.deName, id: i18n.deCode },
                { name: i18n.ghName, id: i18n.ghCode },
                { name: i18n.giName, id: i18n.giCode },
                { name: i18n.grName, id: i18n.grCode },
                { name: i18n.glName, id: i18n.glCode },
                { name: i18n.gdName, id: i18n.gdCode },
                { name: i18n.gpName, id: i18n.gpCode },
                { name: i18n.guName, id: i18n.guCode },
                { name: i18n.gtName, id: i18n.gtCode },
                { name: i18n.ggName, id: i18n.ggCode },
                { name: i18n.gnName, id: i18n.gnCode },
                { name: i18n.gwName, id: i18n.gwCode },
                { name: i18n.gyName, id: i18n.gyCode },
                { name: i18n.htName, id: i18n.htCode },
                { name: i18n.hmName, id: i18n.hmCode },
                { name: i18n.vaName, id: i18n.vaCode },
                { name: i18n.hnName, id: i18n.hnCode },
                { name: i18n.hkName, id: i18n.hkCode },
                { name: i18n.huName, id: i18n.huCode },
                { name: i18n.isName, id: i18n.isCode },
                { name: i18n.inName, id: i18n.inCode },
                { name: i18n.idName, id: i18n.idCode },
                { name: i18n.irName, id: i18n.irCode },
                { name: i18n.iqName, id: i18n.iqCode },
                { name: i18n.ieName, id: i18n.ieCode },
                { name: i18n.imName, id: i18n.imCode },
                { name: i18n.ilName, id: i18n.ilCode },
                { name: i18n.itName, id: i18n.itCode },
                { name: i18n.jmName, id: i18n.jmCode },
                { name: i18n.jpName, id: i18n.jpCode },
                { name: i18n.jeName, id: i18n.jeCode },
                { name: i18n.joName, id: i18n.joCode },
                { name: i18n.kzName, id: i18n.kzCode },
                { name: i18n.keName, id: i18n.keCode },
                { name: i18n.kiName, id: i18n.kiCode },
                { name: i18n.kpName, id: i18n.kpCode },
                { name: i18n.krName, id: i18n.krCode },
                { name: i18n.kwName, id: i18n.kwCode },
                { name: i18n.kgName, id: i18n.kgCode },
                { name: i18n.laName, id: i18n.laCode },
                { name: i18n.lvName, id: i18n.lvCode },
                { name: i18n.lbName, id: i18n.lbCode },
                { name: i18n.lsName, id: i18n.lsCode },
                { name: i18n.lrName, id: i18n.lrCode },
                { name: i18n.lyName, id: i18n.lyCode },
                { name: i18n.liName, id: i18n.liCode },
                { name: i18n.ltName, id: i18n.ltCode },
                { name: i18n.luName, id: i18n.luCode },
                { name: i18n.moName, id: i18n.moCode },
                { name: i18n.mkName, id: i18n.mkCode },
                { name: i18n.mgName, id: i18n.mgCode },
                { name: i18n.mwName, id: i18n.mwCode },
                { name: i18n.myName, id: i18n.myCode },
                { name: i18n.mvName, id: i18n.mvCode },
                { name: i18n.mlName, id: i18n.mlCode },
                { name: i18n.mtName, id: i18n.mtCode },
                { name: i18n.mhName, id: i18n.mhCode },
                { name: i18n.mqName, id: i18n.mqCode },
                { name: i18n.mrName, id: i18n.mrCode },
                { name: i18n.muName, id: i18n.muCode },
                { name: i18n.ytName, id: i18n.ytCode },
                { name: i18n.mxName, id: i18n.mxCode },
                { name: i18n.fmName, id: i18n.fmCode },
                { name: i18n.mdName, id: i18n.mdCode },
                { name: i18n.mcName, id: i18n.mcCode },
                { name: i18n.mnName, id: i18n.mnCode },
                { name: i18n.meName, id: i18n.meCode },
                { name: i18n.msName, id: i18n.msCode },
                { name: i18n.maName, id: i18n.maCode },
                { name: i18n.mzName, id: i18n.mzCode },
                { name: i18n.mmName, id: i18n.mmCode },
                { name: i18n.naName, id: i18n.naCode },
                { name: i18n.nrName, id: i18n.nrCode },
                { name: i18n.npName, id: i18n.npCode },
                { name: i18n.nlName, id: i18n.nlCode },
                { name: i18n.ncName, id: i18n.ncCode },
                { name: i18n.nzName, id: i18n.nzCode },
                { name: i18n.niName, id: i18n.niCode },
                { name: i18n.neName, id: i18n.neCode },
                { name: i18n.ngName, id: i18n.ngCode },
                { name: i18n.nuName, id: i18n.nuCode },
                { name: i18n.nfName, id: i18n.nfCode },
                { name: i18n.mpName, id: i18n.mpCode },
                { name: i18n.noName, id: i18n.noCode },
                { name: i18n.omName, id: i18n.omCode },
                { name: i18n.pkName, id: i18n.pkCode },
                { name: i18n.pwName, id: i18n.pwCode },
                { name: i18n.psName, id: i18n.psCode },
                { name: i18n.paName, id: i18n.paCode },
                { name: i18n.pgName, id: i18n.pgCode },
                { name: i18n.pyName, id: i18n.pyCode },
                { name: i18n.peName, id: i18n.peCode },
                { name: i18n.phName, id: i18n.phCode },
                { name: i18n.pnName, id: i18n.pnCode },
                { name: i18n.plName, id: i18n.plCode },
                { name: i18n.ptName, id: i18n.ptCode },
                { name: i18n.prName, id: i18n.prCode },
                { name: i18n.qaName, id: i18n.qaCode },
                { name: i18n.reName, id: i18n.reCode },
                { name: i18n.roName, id: i18n.roCode },
                { name: i18n.ruName, id: i18n.ruCode },
                { name: i18n.rwName, id: i18n.rwCode },
                { name: i18n.blName, id: i18n.blCode },
                { name: i18n.knName, id: i18n.knCode },
                { name: i18n.lcName, id: i18n.lcCode },
                { name: i18n.mfName, id: i18n.mfCode },
                { name: i18n.pmName, id: i18n.pmCode },
                { name: i18n.vcName, id: i18n.vcCode },
                { name: i18n.wsName, id: i18n.wsCode },
                { name: i18n.smName, id: i18n.smCode },
                { name: i18n.stName, id: i18n.stCode },
                { name: i18n.saName, id: i18n.saCode },
                { name: i18n.snName, id: i18n.snCode },
                { name: i18n.rsName, id: i18n.rsCode },
                { name: i18n.scName, id: i18n.scCode },
                { name: i18n.slName, id: i18n.slCode },
                { name: i18n.sgName, id: i18n.sgCode },
                { name: i18n.sxName, id: i18n.sxCode },
                { name: i18n.skName, id: i18n.skCode },
                { name: i18n.siName, id: i18n.siCode },
                { name: i18n.sbName, id: i18n.sbCode },
                { name: i18n.soName, id: i18n.soCode },
                { name: i18n.zaName, id: i18n.zaCode },
                { name: i18n.gsName, id: i18n.gsCode },
                { name: i18n.ssName, id: i18n.ssCode },
                { name: i18n.esName, id: i18n.esCode },
                { name: i18n.lkName, id: i18n.lkCode },
                { name: i18n.sdName, id: i18n.sdCode },
                { name: i18n.srName, id: i18n.srCode },
                { name: i18n.sjName, id: i18n.sjCode },
                { name: i18n.szName, id: i18n.szCode },
                { name: i18n.seName, id: i18n.seCode },
                { name: i18n.chName, id: i18n.chCode },
                { name: i18n.syName, id: i18n.syCode },
                { name: i18n.twName, id: i18n.twCode },
                { name: i18n.tjName, id: i18n.tjCode },
                { name: i18n.tzName, id: i18n.tzCode },
                { name: i18n.thName, id: i18n.thCode },
                { name: i18n.tlName, id: i18n.tlCode },
                { name: i18n.tgName, id: i18n.tgCode },
                { name: i18n.tkName, id: i18n.tkCode },
                { name: i18n.toName, id: i18n.toCode },
                { name: i18n.ttName, id: i18n.ttCode },
                { name: i18n.tnName, id: i18n.tnCode },
                { name: i18n.trName, id: i18n.trCode },
                { name: i18n.tmName, id: i18n.tmCode },
                { name: i18n.tcName, id: i18n.tcCode },
                { name: i18n.tvName, id: i18n.tvCode },
                { name: i18n.ugName, id: i18n.ugCode },
                { name: i18n.uaName, id: i18n.uaCode },
                { name: i18n.aeName, id: i18n.aeCode },
                { name: i18n.gbName, id: i18n.gbCode },
                { name: i18n.umName, id: i18n.umCode },
                { name: i18n.uyName, id: i18n.uyCode },
                { name: i18n.uzName, id: i18n.uzCode },
                { name: i18n.vuName, id: i18n.vuCode },
                { name: i18n.veName, id: i18n.veCode },
                { name: i18n.vnName, id: i18n.vnCode },
                { name: i18n.vgName, id: i18n.vgCode },
                { name: i18n.viName, id: i18n.viCode },
                { name: i18n.wfName, id: i18n.wfCode },
                { name: i18n.ehName, id: i18n.ehCode },
                { name: i18n.yeName, id: i18n.yeCode },
                { name: i18n.zmName, id: i18n.zmCode },
                { name: i18n.zwName, id: i18n.zwCode }
            ]
        });

        return declare("example/CountrySelector", [FilteringSelect, ValidationTextBox], {
            constructor: function(params) {
                this.constraints = {};
                this.baseClass += ' large-input';
            },
            store: countryStore
        })
    }
);
