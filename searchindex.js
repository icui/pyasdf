Search.setIndex({docnames:["api","asdf_data_set","converting_data_asdf","deleting_pieces","detailed_explanations","examples","examples/create_observed_asdf_file","examples/parallel_pyflex","examples/process_observed","exceptions","index","installation","inventory_utils","large_continuous_datasets","of_tags_and_labels","parallel_processing","query","querying_data","station_data","tutorial","usage_as_context_manager","utils","watermark"],envversion:51,filenames:["api.rst","asdf_data_set.rst","converting_data_asdf.rst","deleting_pieces.rst","detailed_explanations.rst","examples.rst","examples/create_observed_asdf_file.rst","examples/parallel_pyflex.rst","examples/process_observed.rst","exceptions.rst","index.rst","installation.rst","inventory_utils.rst","large_continuous_datasets.rst","of_tags_and_labels.rst","parallel_processing.rst","query.rst","querying_data.rst","station_data.rst","tutorial.rst","usage_as_context_manager.rst","utils.rst","watermark.rst"],objects:{"pyasdf.asdf_data_set":{ASDFDataSet:[1,1,1,""]},"pyasdf.asdf_data_set.ASDFDataSet":{add_auxiliary_data:[1,2,1,""],add_auxiliary_data_file:[1,2,1,""],add_provenance_document:[1,2,1,""],add_quakeml:[1,2,1,""],add_stationxml:[1,2,1,""],add_waveforms:[1,2,1,""],append_waveforms:[1,2,1,""],asdf_format_version:[1,3,1,""],events:[1,3,1,""],filename:[1,3,1,""],filesize:[1,3,1,""],flush:[1,2,1,""],get_all_coordinates:[1,2,1,""],get_data_for_tag:[1,2,1,""],get_provenance_document:[1,2,1,""],get_waveforms:[1,2,1,""],ifilter:[1,2,1,""],mpi:[1,3,1,""],pretty_filesize:[1,3,1,""],process:[1,2,1,""],process_two_files_without_parallel_output:[1,2,1,""],validate:[1,2,1,""]},"pyasdf.exceptions":{ASDFAttributeError:[9,4,1,""],ASDFException:[9,4,1,""],ASDFValueError:[9,4,1,""],ASDFWarning:[9,4,1,""],NoStationXMLForStation:[9,4,1,""],WaveformNotInFileException:[9,4,1,""]},"pyasdf.inventory_utils":{get_coordinates:[12,5,1,""],isolate_and_merge_station:[12,5,1,""],merge_inventories:[12,5,1,""]},"pyasdf.utils":{AuxiliaryDataAccessor:[21,1,1,""],AuxiliaryDataGroupAccessor:[21,1,1,""],FilteredWaveformAccessor:[21,1,1,""],JobQueueHelper:[21,1,1,""],ProvenanceAccessor:[21,1,1,""],ReceivedMessage:[21,1,1,""],SimpleBuffer:[21,1,1,""],StationAccessor:[21,1,1,""],StreamBuffer:[21,1,1,""],WaveformAccessor:[21,1,1,""],Worker:[21,1,1,""],get_all_ids_for_prov_document:[21,5,1,""],get_multiprocessing:[21,5,1,""],is_list:[21,5,1,""],is_mpi_env:[21,5,1,""],is_multiprocessing_problematic:[21,5,1,""],label2string:[21,5,1,""],labelstring2list:[21,5,1,""],sizeof_fmt:[21,5,1,""],split_qualified_name:[21,5,1,""],wf_name2seed_codes:[21,5,1,""],wf_name2tag:[21,5,1,""]},"pyasdf.utils.JobQueueHelper":{get_job_for_worker:[21,2,1,""],poison_pill_received:[21,2,1,""],received_job_from_worker:[21,2,1,""]},"pyasdf.utils.ProvenanceAccessor":{get_provenance_document_for_id:[21,2,1,""],list:[21,2,1,""]},"pyasdf.utils.ReceivedMessage":{data:[21,3,1,""]},"pyasdf.utils.StreamBuffer":{get_size:[21,2,1,""]},"pyasdf.utils.WaveformAccessor":{channel_coordinates:[21,3,1,""],coordinates:[21,3,1,""],get_waveform_tags:[21,2,1,""],list:[21,2,1,""]},"pyasdf.utils.Worker":{active_jobs:[21,3,1,""],completed_jobs_count:[21,3,1,""]},"pyasdf.watermark":{get_watermark:[22,5,1,""]},pyasdf:{asdf_data_set:[1,0,0,"-"],exceptions:[9,0,0,"-"],inventory_utils:[12,0,0,"-"],query:[16,0,0,"-"],utils:[21,0,0,"-"],watermark:[22,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","exception","Python exception"],"5":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:exception","5":"py:function"},terms:{"000000z":[18,19],"00z":1,"01t10":19,"01t12":19,"021324z":8,"03__2009":[3,14],"03t08":18,"04t00":18,"04t14":19,"09t19":18,"10t17":19,"10t23":13,"11t06":8,"12t00":13,"16t20":2,"19__synthet":19,"228861452825754e":15,"23g":13,"24t00":[1,3,14],"250000z":19,"26t00":18,"300000z":19,"32__exampl":[3,14],"373da5fe_d424_4f44_9bca_4334d77ed10b":19,"438750z":2,"45e":19,"48__observed_process":19,"49__1998":19,"500000z":19,"52__1998":19,"5369817358011915e":15,"5441928281088053e":15,"64bit":11,"6_2010":6,"857558z":19,"879421311443366e":15,"break":[13,19],"case":[1,2,7,11,13,14,15,18,19],"class":[1,18,20,21],"default":[1,15],"final":11,"float":[1,17,19],"function":[1,3,7,15,17,18,19,21],"import":[1,2,3,6,7,8,11,13,14,15,17,18,19,20],"int":[1,8,17],"long":1,"new":[1,6,8,9,12,14,15,16,19,21,22],"public":1,"return":[1,7,8,12,15,17,19,21,22],"short":[14,15,19],"true":[1,11,19,21],"try":[13,21],"while":[13,14,18],AND:17,Adding:6,But:11,EHE:[1,19,21],For:[1,10,11,19],Has:[1,14,19],IDs:17,Its:14,NOT:6,One:[1,15],The:[1,2,3,11,12,13,14,15,17,18,19,20,21],There:[1,11,14,19],These:[14,17],Using:1,Will:[1,21],With:4,__2012_01:21,__synth:21,_build:11,abil:21,abl:[1,7,8,11,15,19],about:[4,11,13,22],abov:15,access:[1,9,13,17,18,19,21],accessor:[17,21],accident:[1,13],accord:11,account:11,acknowledg:10,acquir:19,across:7,active_job:21,actual:[1,3,11,19,21],adapt:[1,10],add:[1,2,6,13,19],add_auxiliary_data:[1,19],add_auxiliary_data_fil:1,add_provenance_docu:1,add_quakeml:[1,6,19],add_stationxml:[1,6,19],add_waveform:[1,3,6,13,14,19,20],added:1,adding:1,addit:[1,3,14,15,19,21],addition:[1,19],adj_src:19,adjac:[1,13],adjoint_source_typ:19,adjointsourc:19,adjust:13,adk:19,advanc:4,advantag:[13,19],affect:19,afi:19,after:[1,3,11,14,20],afterward:2,again:[1,3,14,15,19],against:[1,11],aid:15,akin:15,albuquerqu:19,alfo:19,alia:21,all:[1,2,3,11,13,14,15,17,18,19,21],all_window:7,allow:[1,3,17,19],almost:3,along:11,alongsid:17,alphanumer:1,alreadi:[1,19],also:[1,3,8,11,13,14,15,17,18,19,20],altern:[15,19],altm:[13,17,21],alwai:[14,17,19,20],amount:[1,19],anaconda:11,analysi:19,ani:[1,3,6,11,13,15,17,18,19,21],anmo:[1,2,19],anoth:[7,13],anto:19,anyth:[3,15,19],apart:[1,13],api:[10,11,19],append:[1,7],append_waveform:[1,13],appl:11,appli:[1,15],applic:[11,13],appropri:19,approxim:21,arbitrari:[1,15,17],arbitrarili:19,architectur:15,argument:[1,17,21],around:[8,13,19],arrai:[1,3,13,14,19],array_a:3,asdf:[0,3,4,5,7,8,9,10,13,14,15,17,18,21],asdf_data_set:[1,17,21],asdf_exampl:15,asdf_format_vers:1,asdfattributeerror:9,asdfdataset:[1,2,3,6,7,8,13,14,15,17,18,19,20],asdfexcept:9,asdfvalueerror:[9,13],asdfwarn:9,asid:11,assert:11,assign:14,assoc:19,associ:[1,2,6,9,17,19],assum:[1,3,13],ata:10,attach:14,attach_respons:[8,15,17],attempt:[1,15,19],attribut:[1,9,17,18,19],autogener:1,automat:1,automerg:1,auxiliari:[1,3,21],auxiliary_data:[1,3,19],auxiliary_data_typ:21,auxiliarydataaccessor:21,auxiliarydatagroupaccessor:21,avail:[1,11,15,17,19,21],awar:[1,19],back_azimuth:8,backup:13,band:8,bar:13,barrier:19,base:[1,17],basic:19,bavarian:13,baz:8,bbsr:19,been:[3,15,19],befor:1,behav:19,being:[1,15,19],belong:19,below:11,benchmark:13,benefit:11,best:[1,11,13,14,15,18,19],better:[1,13,14,19],bh1:19,bh2:19,bhe:18,bhn:18,bhu:19,bhv:19,bhw:19,bhz:[18,19],bhz__1998:19,big:[1,11,13,15,19],binari:1,bit:[1,11,13,14,15],bla:21,bookkeep:13,bool:1,bootstrap:11,both:[1,8,11,12,13,15],bound:18,browser:11,bsd:[1,9,12,16,21,22],bullet:2,bw_alfo_eh:19,bw_alfo_ehn:19,bw_alfo_ehz:19,bw_altm:13,bw_bla_eh:19,bw_bla_ehn:19,bw_bla_ehz:19,bw_rjob:[1,3,14],c_0:7,c_1:7,c_2:7,c_3a:7,c_3b:7,c_4a:7,c_4b:7,cach:21,calcul:[14,15],call:[1,13,15,19,21],camel:19,can:[1,2,3,6,7,8,11,12,13,14,15,17,19,20,21],cannot:[1,2,21],capabl:19,care:[1,3,19],carri:1,cat:[1,2,19],catalog:[1,2,19],categori:1,caus:17,cc_acceptance_level:7,center:19,central:1,certain:[1,2,3,12,14,15,17,19,21],chain:17,chang:[11,12,19],channel:[1,8,11,12,13,17,18,19,21],channel_coordin:[18,21],check:[1,2],choic:[1,11,13,14],choos:11,chose:15,chosen:11,chunk:1,cientif:10,circumst:1,clarifi:14,classic:1,claus:[1,9,12,16,21,22],clear:[1,4],close:[15,17,20],cluster:11,code:[1,3,7,17],collect:[5,15],colorama:11,com:[10,11,21],combin:[3,11,17,19],come:19,comm:1,comm_world:15,comma:[1,17,21],command:[1,11],common:[1,2,14,15],commun:[15,19],compar:[1,15],comparis:7,comparison:17,compat:19,compil:[11,15],complet:[13,19],completed_jobs_count:21,complex:[1,8,17,19],compon:[7,8,17],compress:[1,13,19],comput:11,conceptu:15,conda:11,config:7,confus:[4,14],connect:17,consequ:1,constraint:17,construct:[1,17,19],constructor:1,consult:15,contact:[3,10,11],contain:[1,2,15,18,19,21],content:[1,12,14,19],context:[4,19],continu:[1,4,7,17],conveni:[18,19],convent:[1,14,17,19],convert:[4,8,19,21],coord:17,coordin:[1,2,12,17,18,21],copi:15,copyright:[1,9,12,16,21,22],core:[1,8,11,15,18,19],correct:15,correctli:2,correspond:[1,2,15,21],corrupt:13,cost:8,could:[1,8],count:14,counter:21,coupl:[13,15,19],cours:[11,13],cover:2,cpu_count:15,cpython:11,creat:[1,3,5,13,18,21],curat:19,current:[1,3,11,13,15,21,22],cvna:[15,18],dai:13,daptabl:10,darwin:11,data:[0,4,5,6,7,10,11,12,14,15,21],data_typ:[1,19],datacent:1,dataset:[17,19],date:19,deal:[1,12,15,19,21],debug:[1,22],deconvolv:15,decreas:13,def:[7,8,15],defin:15,del:[3,7,8],delet:[4,15,19],delta:[1,13],demand:[17,18],demean:8,demonstr:[1,6,13,19],denot:[1,21],depend:[1,13,14,18,19],describ:[14,19],descript:17,design:[13,15],desir:[1,19],detail:[1,2,11,18,19],detect:[1,19],determin:13,detrend:[8,17],develop:[3,11],dict:1,dictionari:[1,19],differ:[1,3,8,13,14,15,19],difficult:11,digit:14,dill:11,dimension:1,directli:[1,3,19],disabl:[1,19],disc:14,discuss:15,disp:8,distinguish:[14,19],distribut:[11,21],dlna_acceptance_level:7,dmc:[18,19],doc:11,document:[1,2,3,10,15,18,19,21],document_nam:1,dodt:[15,18],doe:[1,3,11,17,19],doing:[1,11],don:[1,8,11,15,17],dot:19,download:[11,19],ds_1:15,ds_2:15,dtype:[1,8,19],due:19,duplic:1,dure:[15,19],dvanc:10,each:[1,8,14,15,17,19,21],earth:14,earthquak:1,eas:[19,22],easi:[11,17,19],easier:13,ecosystem:19,edu:[18,19],effect:13,effici:[1,13,17,19],effort:6,ehe__2009:[3,14],ehe__2012:21,ehn:1,ehn__2009:14,ehz:[1,13],ehz__2009:14,eismic:10,either:[1,13,15,17,18,19],ekna:15,element:[17,19],elev:17,elevation_in_m:[2,17,18,19],enabl:[1,11,15,19],encod:[13,14],end:[1,15,17,19],endtim:[1,13,17,18],energi:[7,15],energy_ds_1:15,energy_ds_2:15,enlarg:1,enumer:[6,19],environ:[19,21],equal:15,error:[1,9,15,21],especi:[1,11],ethiopia:18,evalu:17,evdp:2,even:[1,11,13,19],event:[1,2,3,6,7,8,17],event_descript:19,event_id:[1,2,6,19],event_latitud:8,event_longitud:8,event_test:1,event_typ:19,eventid:19,everi:[13,17],everyth:[7,11,13,14,19],everywher:19,evla:2,evlo:2,exact:1,exactli:[1,13],exampl:[1,3,6,7,8,13,14,15,20],example_arrai:19,example_docu:3,example_fil:18,example_repack:3,except:[0,1,6],execut:11,exhaust:[1,19],exist:[1,6,8,9,15,17,18],expect:1,expens:1,explain:[14,15,17],explanatori:17,explicit:[15,19],explicitli:14,explor:1,express:17,extent:[14,19],extract:[1,12,13,17,18,21],facilit:[1,21],fact:21,factor:13,fairli:[1,8,17,18,19],fals:[1,8,11],far:1,fast:1,faster:[1,13,18],favor:11,fdsnw:[18,19],featur:19,feel:[13,17],field:[2,21],figur:8,file:[1,3,5,8,9,11,12,13,14,15,17,18,19,20],filenam:[1,6,13,15,19],filename_or_object:1,files:[1,21],filesystem:1,fill:1,filter:[1,14],filtered_item:21,filteredwaveformaccessor:[17,21],finish:[7,8,19],first:[1,13,15,19],fit:[1,11,19],fix:11,flake8:11,float32:8,float64:[1,19],flush:1,fnmatch:17,focal:[1,17],focal_mechan:[1,17,19],focal_mechanism_id:1,focalmechan:[1,17],folder:[13,19],folder_with_sac_fil:2,follow:[2,3,11,14,15,17,19],forc:1,forg:11,fork:21,form:17,format:[1,2,4,6,10,14,15,18,19,21],forward:1,fp7:10,free:13,frequenc:8,from:[1,2,3,6,7,8,10,11,12,13,14,15,17,19,21],fulfil:17,full:[13,17,18],fulli:19,fun:17,furi:18,further:[10,11,19],gap:1,gather:[1,15],gcc:11,gcmt_event_south_sandwich_islands_region_mag_5:6,gener:[2,3,9,19],geodet:8,geograph:17,geophysik:[1,9,12,16,21,22],get:[1,2,8,12,15,17,19,21],get_all_coordin:[1,18],get_all_ids_for_prov_docu:21,get_coordin:12,get_data_for_tag:1,get_job_for_work:21,get_multiprocess:21,get_provenance_docu:1,get_provenance_document_for_id:[19,21],get_referred_object:[2,19],get_siz:21,get_watermark:22,get_waveform:[1,13],get_waveform_tag:[15,19,21],github:[10,11,15],give:[1,17,19],given:[1,7,12,13,14,15,17,19,21],glob:[6,13,19],goal:15,goe:4,good:[1,19],gps2distazimuth:8,granular:[13,19],gratefulli:10,greater:19,grm:15,group:[1,3,15],guarante:20,guard:1,gzip:[1,13,19],h5py:[1,11,15],h5repack:3,half:1,hand:[1,14],handi:21,hann:[8,17],happili:1,harder:13,hardwar:11,has:[1,3,9,11,13,14,15,17,18,19],hasattr:7,have:[1,2,11,12,13,14,17,19,21],hdf5:[1,3,11,14,19],header:2,heavi:15,help:[2,19],helper:[16,19,21],here:[1,10,11,13,15,19],hierarch:[14,17],hierarchi:[1,14],high:15,honor:[1,2],hour:13,how:[5,6,11,14,15,17,18,19],hpc:11,html:11,http:[10,11,18,19,21],human:21,i386:11,idea:1,identif:1,identifi:[19,21],ids:[1,21],ifilt:[1,14,17],ignor:15,illustr:[3,14,15],implement:[1,9,11,17,21],impori:1,importantli:1,impos:19,improv:15,inc:11,includ:[11,14,18],increas:[1,22],increment:21,inde:11,index:[3,11],individu:19,influenc:14,inform:[1,3,10,11,14,15,17,18,22],init:21,initi:13,input:[1,15],instal:[13,15],instanc:21,institut:[18,19],instruct:11,instrument:[15,18],integ:[19,21],interact:[1,19],intern:[1,2,11,15],interpol:8,interpret:17,interv:1,introduct:19,introductori:17,inv:[8,12,15,17],inv_a:12,inv_b:12,inventori:[0,1,15,18,19],inventory_util:12,ipython:19,iri:[18,19],is_list:21,is_mpi_env:21,is_multiprocessing_problemat:21,is_to_:8,isol:12,isolate_and_merge_st:12,issu:[11,15,21],item:[1,3,13,19,21],iter:[1,17,21],its:[15,18],itself:[1,11],iu_anmo:[2,19],iu_anmo_eh:19,iu_anmo_ehn:19,iu_anmo_ehz:19,iu_furi:18,jan:3,januari:17,job:21,jobqueuehelp:21,join:17,judg:11,just:[1,2,3,11,15,19],keep:[1,8,11,15,19],kei:[15,17,19,21],kind:7,know:[1,11],known:[1,21],krischer:[1,9,12,16,21,22],kwarg:1,label2str:21,label:[1,4,17,21],labelstring2list:21,land:10,languag:19,lapack:21,larg:[1,4,19],larger:1,last:[1,13,19,21],later:[11,19],latest:10,latitud:[2,8,17,18,19],launch:15,layer:14,least:17,leav:13,len:[6,7,18,19],length:[1,15],less:[1,13],let:1,letter:17,level:[1,12,18,19,21],librari:18,licens:[1,9,12,16,21,22],like:[1,6,13],limit:[1,13,17,19,21],line:[1,11],linear:[8,17],link:[2,11],lion:[1,3,9,12,15,16,21,22],list:[1,6,14,17,19,21],littl:14,load:[11,13],local:11,local_depth_in_m:[18,19],localpart:21,locat:[1,13,17],logic:17,longer:1,longitud:[2,8,17,18,19],look:[10,17,19],loop:[8,13,14,17,18],lossless:[1,19],lot:13,lowercas:1,lxml:[11,21],lzf:1,machin:[8,11],made:13,magnitud:[1,17,19],magnitude_id:1,main:1,mainli:[1,21],make:[7,11,13,15],manag:[4,19,21],mandatori:1,mani:[1,8,12],manual:19,map:[1,15],match:[1,17],max_cc_valu:7,max_percentag:[8,17],max_period:[7,8],max_time_before_first_arriv:7,mean:[17,19],meaning:[1,6],mechan:[1,17],memori:[1,13,15,19],merg:[1,12,13,19],merge_inventori:12,messag:1,meta:[14,19],meter:17,method:[1,8,13,17,19],mexico:19,might:[1,7,8,11,13,15,17,19],min_period:[7,8],min_surface_wave_veloc:7,mind:[1,8,11,15,19],minise:[1,13,19],minut:13,misfit:[7,15],misfit_valu:19,mode:[1,15],model:14,modern:19,modif:6,modifi:3,modul:[8,11,15,17,19,21],month:13,more:[1,2,4,11,13,15,18,19,21],most:[1,7,11,13,17],mostli:1,move:13,mpi4pi:[11,15,19],mpi:[1,6,7,8,11,21],mpiexec:19,mpirun:[7,8,15,19],mseed:[1,19],much:[13,18,19],muenchen:[1,9,12,16,21,22],multipl:[1,12,13,19],multiprocess:[8,11,21],multitap:19,must:[1,11,14,15,17,19,21],mutabl:3,mwc:19,mxe:[2,19],mxe__1998:19,mxn:[2,19],mxn__1998:19,mxz:[2,19],mxz__1998:19,name:[1,14,17,19,21],namespac:21,namespace_uri:[1,21],nativ:15,natur:[13,19],necessari:[8,11,12,15,19],need:[3,18],nest:[1,3],network:[1,12,13,17,18,19],network_id:12,never:21,new_fil:[1,19],newli:1,next:[1,13,17,19],non:[1,9,19],none:[1,15,17],nonetheless:[1,15],normal:[1,13,17],nostationxmlforst:9,note:[1,2,11,13,14,15],notebook:19,noth:15,now:[1,3,11,15,18,19],npt:[8,17],num:21,number:[1,10,13,15,17,19,21],numpi:[1,8,11,19],obj:21,object:[1,12,14,15,17,18,19,21],obs:7,observ:[1,5,6,7,14],observed_process:19,obspi:[1,2,6,8,11,13,14,15,17,18,21],obspy_exampl:1,occur:1,off:1,offer:[18,19],oftentim:1,oldest:21,onc:[13,15,19],one:[1,8,11,12,13,15,17,18,19],ones:1,onli:[1,3,7,8,11,13,15,17,18,19],open:[1,11,15,19],oper:[1,3,15,17,18,19],option:[1,6,11,13,14,15,19],org:[10,19],organ:14,orient:19,origin:[1,2,8,12,13,17,19],origin_id:1,ormat:10,other:[1,14,15,17],other_d:[1,7],other_modul:11,other_station_group:7,otherwis:[1,7,8,11,15,19],out:[2,8,13,19],out_gzip3:13,out_uncompress:13,output:[1,8,15],output_filenam:[1,15],over:[1,8,13,14,15,17],overlap:1,overview:19,overwrit:3,overwritten:1,packag:[1,11],page:[1,5,10,14],parallel:[1,4,5,19],parallel_pyflex:7,paramet:[1,8,12,15,17,19,21],pars:[17,18,19],part:14,particular:[1,3,13,19],pass:[1,11,15,17,19],past:1,path:[1,3,6,19,21],pattern:[13,15,17],peopl:14,per:[1,3,13,17,18,19],perfectli:17,perform:15,period:8,physic:3,pick:7,piec:[1,4,14,19],pill:21,pip:[11,13],place:19,plai:19,platform:21,pleas:[1,2,3,8,10,11,13,15,18,19],plot:19,point:[1,8,11,15,19,21],poison_pill_receiv:21,possibl:[1,3,13,14,19],potenti:[1,4,11,13,14,17,19],power:[17,19],practic:17,pre_filt:8,precis:[1,8,19],preferred_focal_mechans:1,preferred_magnitud:1,preferred_origin:[1,8],preprocessed_27s_to_60:7,preprocessed_:8,preprocessed_synthetic_27s_to_60:7,present:15,pretti:[1,14,17],pretty_files:1,prevent:13,previou:[1,6],print:[1,6,7,11,13,14,15,19],print_sys_info:11,priorit:12,problemat:11,procedur:15,process:[1,4,5,7,12,17,19,21],process_funct:[1,8,15],process_observ:8,process_two_files_without_parallel_output:[1,7],processed_1_10_:14,processed_exampl:15,processor:11,produc:[1,8],program:[3,19],programmat:19,progress:[13,19],project:10,prone:13,properli:[11,15],prov:[1,11,21],prov_id:19,provdocu:19,proven:[1,3,19,21,22],provenance_id:[1,19,21],provenanceaccessor:21,provid:15,purpos:[1,14,17],pyadsf:3,pyasdf:[1,2,3,4,5,6,7,8,9,12,13,14,15,17,18,20,21,22],pyflex:5,pypi:11,pytest:11,python:[1,2,7,8,9,10,11,15,17],quak:[1,19],quakem:1,quakeml:[1,2,6],qualifi:[1,21],qualiti:19,queri:[0,1,4,18,19],query_object:1,quick:[1,12],quickli:18,quit:[1,13,15],rais:[1,6,9,15,21],random:[1,19],randomarrai:[1,3,19],rank:[1,7,15],rate:[15,17],rather:17,ratio:1,raw:[1,14,19],raw_record:[1,6,8,13,14,15,17,19],read:[1,2,6,11,13,14,18],read_ev:[1,17],readabl:21,readthedoc:10,realli:[1,8],rearrang:19,reason:[1,15,19],receiv:21,received_job_from_work:21,receivedmessag:21,recent:13,recogn:[15,19],recommend:6,record:[1,17,21],recurs:2,reduc:19,refer:[2,15,19],regain:3,regard:[15,17],reinstal:11,relat:[17,19],relev:22,remov:[3,21],remove_respons:[8,15,17],repercuss:1,replac:[1,13,19],repositori:10,repres:19,represent:1,reproduc:22,request:[1,21],requir:[1,3,6,7,8,11,13,15,17,19],res:[18,19],reserv:[1,14],resiz:1,resolv:17,resourc:19,resource_id:19,resourceidentifi:[1,17,19],respons:[15,18],rest:17,result:[1,7,8,13,15,21],retriev:[1,14],revert:3,rich:17,rjob:[1,3,14],robin:8,rot:13,rotat:8,round:8,rule:14,run:[1,5,6,8,11],s2n_limit:7,s_group_1:15,s_group_2:15,sac2asdf:2,sac:[1,6,19],same:[1,8,11,12,13,15,17],sampl:[1,2,13,15,17,19],sampling_r:[8,17],sampling_rate_in_hz:19,saper:21,save:[8,15,19],scale:8,scenario:1,scheme:8,scientif:19,scipi:11,script:[2,13,15,19],seamlessli:1,search:[2,14,17,21],section:[4,17,19],see:[1,2,10,11,18,19],seed:21,seis_prov:19,seismic:[1,10,13],seismicdata:[10,11],seismolog:11,seisprov:19,select:[7,15,17],select_window:7,self:17,send:[15,18,19],separ:[1,15,17,19],seper:1,serv:14,servic:[18,19],set:[0,4,7,8,14,15,21],setup:1,sever:[1,13],shape:[1,19],share:15,shell:19,ship:[2,3,11],should:[1,11,14,17,19],show:[14,17],shown:15,shuffl:1,signific:8,silver:2,similar:14,simpl:[1,13,14,15,21],simplebuff:21,simpli:[18,19],simplifi:[1,9,12,16,21,22],simul:1,singl:[1,8,11,13,17,19],single_item_read_limit_in_mb:[1,13],site:10,size:[1,3,17,19,21],sizeof_fmt:21,slash:1,slightli:[14,19],slow:[1,18],slower:1,smi:19,snippet:3,some:[1,3,4,5,6,7,11,13,17,18,21],somehonw:8,someth:[1,11,15],sometim:[12,14,19],soon:[15,17],sourc:[1,9,12,21,22],sp012_as_cd84e87:19,space:8,special:[1,8],specif:[1,9,13,19],specifi:[1,21],speed:[1,13,15],sphinx:11,split:[1,19],split_qualified_nam:21,sql:17,squar:15,sta:19,stackoverflow:21,staff:3,stall:15,stalta_waterlevel:7,start:[1,8,13,17,19],starttim:[1,8,13,17,18],stat:[2,8,14,19],statement:15,station:[1,2,3,4,7,9,12,13,14,15,17,21],station_id:[12,19],station_latitud:8,station_longitud:8,station_nam:[1,21],stationaccessor:21,stationxml:[1,2,3,6,7,9,12,14,17,18],stdp:2,steim:13,stel:2,step:[11,15,19],stick:11,still:[1,18],stla:2,stlo:2,store:[1,13,14,15,17,18,19,21],str:[1,12,17],straight:[1,14],straightforward:19,strang:1,stream:[1,2,13,15,19,21],streambuff:21,strictli:15,string:[1,17,21],strong:13,structur:[1,19],style:21,sub:19,subfold:1,subset:17,subtleti:19,suffici:11,suggest:13,suitabl:13,sum:15,supercomput:11,support:[8,10,11,15],suppos:19,sure:[1,7,11,15],syn:7,syntax:[17,19],synth:21,synthet:[1,2,7,14,19],synthetic_prem:14,system:[2,11,15,22],szip:1,ta_a023_bh:19,ta_a023_bhn:19,ta_a023_bhz:19,tab:19,tabl:17,tag:[1,2,3,4,6,13,15,17,19,21],tag_map:[1,8,15],tag_nam:8,take:[1,8,12,13,15,21],taken:7,taper:[8,17],teach:[4,19],tell:19,tempor:17,test:21,test_data:1,than:[11,13,17,19],thats:7,thei:[1,14,17],them:[1,2,12,14,19],theme:11,thi:[1,2,3,4,5,6,7,8,10,11,13,14,15,17,18,19,21],thing:[5,11,15],think:[1,13],this_station_group:7,those:1,though:13,thread:[11,21],three:1,through:13,thu:[3,13,18,19],time:[1,7,8,12,13,15,17,18,19,21],timeit:18,toler:1,too:[8,15],touch:1,tqdm:13,trace:[1,2,13,14,15,17,19],traceback:[1,13,15],traceback_limit:[1,15],tri:1,tshift_acceptance_level:7,tupl:[1,21],turn:[1,15],tutori:[2,13],two:[1,7,8,10,12,13,14,15,17,19],type:[1,8,18,19,21],typic:19,unchang:1,uncompress:13,under:19,underli:[1,19],underscor:[1,19],uni:[1,9,12,16,21,22],unicod:14,uninstal:11,uniqu:1,unit:19,unless:1,unnecessari:19,unprocese:1,unprocess:[1,19],updat:11,url:[17,21],usa:19,usag:[1,4,17,19],usarrai:17,use:[1,2,3,8,13,14,15,17,19],used:[1,3,7,11,13,14,15,19,20,21],useful:[1,5,14,15,19],user:15,uses:[4,8,13,19],using:[3,15],usual:[11,21],utcdatetim:[1,8,13,17],utf:14,util:[0,2,8,11,19],valid:[1,17,21],valu:[1,9,15,21],valueerror:1,vel:15,verbos:1,verc:10,veri:[1,6,11,12,13,15,17,18,19,21],version:[1,2,8,11,13,18,19,21],vertic:17,via:[11,17,19],volum:[1,11],wai:[1,11,12,13,17,19],want:[1,11,13,15,17],warn:9,watermark:0,waveform:[1,2,3,6,9,11,13,14,15,17,18,21],waveformaccessor:[19,21],waveformnotinfileexcept:9,web:[10,18,19],weight_funct:7,well:[1,8],wf_name2seed_cod:21,wf_name2tag:21,what:[1,11,15,17,19],whatev:[15,17,19],when:[1,7,8,9,11,13,19,21],where:[1,8],wherea:19,whether:19,which:[1,11,13,14,15,17,19,20],whole:18,whose:21,why:11,wildcard:[1,14,17],win:7,window:[7,15],window_signal_to_noise_typ:7,window_weight_fct:7,within:[1,3,19],without:[1,11,14,15,19],word:14,work:[1,3,4,11,13,14,15,17,19,21],worker:[1,21],worker_nam:21,workflow:19,worst:1,worth:[6,11],would:[6,13],write:[1,2,3,8,11,13,15,19],written:[1,2,15,19],www:10,x86_64:11,xml:[1,6,19],year:[1,13],yet:[1,15,19],yield:[1,17],you:[1,3,8,10,11,13,15,17,19],your:[1,2,8,11,15],yourself:11,yyyi:1,zero_mean:8},titles:["API","ASDF Data Set","Converting Data to ASDF","Deleting Pieces of a Data Set","Detailed Explanations","Examples","Creating an ASDF File","Running pyflex in Parallel","Processing Observed Data in Parallel","Exceptions","pyasdf","Installation","Inventory Utilities","Large Continuous Data Sets","Of Tags and Labels","Parallel Processing","Query","Querying a Data Set","Working With Station Data","Tutorial","Usage as a Context Manager","Utils","Watermark"],titleterms:{Adding:19,Using:19,With:18,about:19,api:0,asdf:[1,2,6,19],auxiliari:19,build:11,context:20,continu:13,convert:2,creat:[6,19],data:[1,2,3,8,13,17,18,19],delet:3,depend:11,detail:4,document:11,earthquak:19,event:19,exampl:[5,17,19],except:9,exist:19,explan:4,file:[2,6],folder:2,free:3,inform:19,initi:19,instal:11,inventori:12,label:14,larg:13,learn:19,manag:20,method:15,more:17,mpi:[15,19],multiprocess:15,non:11,note:19,observ:8,obspi:19,parallel:[7,8,11,15],piec:3,process:[8,15],process_two_files_without_parallel_output:15,pyasdf:[10,11,19],pyflex:7,python:19,queri:[16,17],quick:17,read:19,run:[7,15],sac:2,set:[1,3,13,17,19],space:3,station:[18,19],stationxml:19,tag:14,test:11,thing:3,tutori:19,type:17,usag:20,using:19,util:[12,21],watermark:22,waveform:19,work:18}})