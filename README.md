
# F5-data-group-manager

Manage iRule data-groups from a central location.



Requirements:

1- dg-app-dist.zip file from this depository.

    *Expand this file in the nginx root html directory.  /usr/share/nginx/html

2- NGINX web server and reverse proxy.  

    *Use provided default.conf file in the nginx directory. Put this file in /etc/nginx/confg.d. 

    *The /etc/nginx/nginx.conf file can remain at default.

3- A file name datagroups.json and another file named devices.json.  Both in JSON format.  You can find sample under "assets" directory in the dg-app-dist.zip file as well as under "src/asset".

4- A username and password for a service account that works on all BigIPs.

    *The service account only needs permission to manage data-groups, "LTM manager".  

    *You must configure these credentials in the NGINX default.conf file.  See provided default.conf file for and example. 

    *The App sends the creds to the BigIP using Basic auth.  

    *You will need to encode "username:password" in base64 and update the default.conf file with new value.  

    * This is the line that needs to change:
		proxy_set_header Authorization 'Basic YWRtaW46YWRtaW4=';



Nginx acts as both a webserver and a reverse proxy for this app.  The default.conf file has commands to:

	1- Serve from local files anything with URI "/".

	2- Reverse proxy to remote BigIP anything with URI "/mgmt/".  The address:port combo of the remote BigIP is passed along via an HTTP header named "target".

	3- Reverse proxy to a remote site anything with URI "/ext/".  The entire URL is passed along via HTTP header named "target".


Under /src/assets you will find examples of files to track F5 BigIP devices as well as data-groups.  The data-groups file lists a cluster of devices that will hold a copy of each data-group.  It will also list a Master device.  The Master device is considered the source of truth for the data-group records and data.

Only internal data-groups are handled initially.

In order to add/edit/delete on record at a time, this app relies on a BigIP TMSH CLI script.  The name of the script is "add-rec" initially.  Will chave that soon.

The script must be uploaded to the BigIPs that you wish to do single record CRUD for.  There are two versions of the script under assets directory.

	*dg_script_ready_for_POST.json .  this file ready to be POSTed to the BigIP via a REST call.  The App helps with this.  You can use the App to list all the devices found in devices.json and click the button to upload the script.

	*records_CRUD_Script , a human readable version of the script.  Note, it may not always be the latest.


