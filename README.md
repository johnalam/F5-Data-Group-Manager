
# F5-data-group-manager

Manage iRule data-groups from a central location.  Manage a data-group across multiple BigIPs with synchronization.



Requirements:

	1- Content of dist-user or dist/F5IQ file from this depository.

	    *dist/F5IQ is the full version.  It includes Big-IP device management.  Allows managing data-group on each Big-IP.  Also allows exporting Virtual server configuration to F5 AS3 declarations.  This version is to be used by admins.

	    *dist-user lacks the device management.  To be used by a user. (Obsoleted, do not use)

	    *copy these files to the nginx root html directory.  E.G. "/usr/share/nginx/html" .

	2- NGINX web server and reverse proxy.  

	    *Use provided default.conf file in the nginx directory. Put this file in /etc/nginx/confg.d. (or where you like if you are an advanced NGINX users)

	    *The /etc/nginx/nginx.conf file can remain at default.

	3- A file name datagroups.json and another file named devices.json.  Both in JSON format.  You can find sample under "assets" directory in the dg-app-dist.zip file as well as under "src/asset".

	4- A username and password for a service account that works on all BigIPs.

	    *The service account only needs permission to manage data-groups, You can use the BigIP Role "LTM manager".  

	    *You must configure these credentials in the "server" block of the NGINX config file.  See provided default.conf file for and example.
	    
	    *There are multiple "location" blocks under the "server" block.  Some have a "root" directive.  Make sure this points to the directory where you stored the downloaded file.  E.G. "/usr/share/nginx/html"

	    *The creds stay on the NGINX.  Never used by the browser.  NGINX sends the creds to the BigIP using Basic auth.  

	    *You will need to encode "username:password" in base64 and update the default.conf file with new value.  

	    * This is the line that needs to change:
			proxy_set_header Authorization 'Basic YWRtaW46YWRtaW4=';


Nginx acts as both a webserver and a reverse proxy for this app.  The default.conf file has commands to:

	1- Serve from local files anything with URI "/".

	2- Reverse proxy to remote BigIP anything with URI "/mgmt/".  The address:port combo of the remote BigIP is passed along via an HTTP header named "target".

	3- Reverse proxy to a remote site anything with URI "/ext/".  The entire URL is passed along via HTTP header named "target".


Under /src/assets you will find examples of files to track F5 BigIP devices as well as data-groups.  The data-groups file lists a cluster of devices that will hold a copy of each data-group.  It will also list a Master device.  The Master device is considered the source of truth for the data-group records and data.

Only internal data-groups are handled.  This tool renders external data-groups obsolete in most cases.



