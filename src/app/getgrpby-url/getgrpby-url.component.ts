import { Component, OnInit , Input} from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from "../data.service";


@Component({
  selector: 'app-getgrpby-url',
  templateUrl: './getgrpby-url.component.html',
  styleUrls: ['./getgrpby-url.component.css']
})
export class GetgrpbyURLComponent implements OnInit {
  @Input() grpData = { URL:'' };

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router, private data: DataService ) { }

  results:any = {};
  ngOnInit() {
      this.data.grp_results.subscribe(results => this.results = results)
  }

  downloadDG() {
    const URL=this.parseURL(this.grpData.URL);
 
    this.rest.getgrpFromURL('/ext/', this.grpData.URL)
      .subscribe(res => {
      	  res.source='URL';
      	  this.data.setGrpData(res);
      	  this.data.setGrpSource('URL');
          this.router.navigate(['/records/'+res.name]);
        }, (err) => {
          console.log(err);
          this.data.changeMessage(err);
        }
      );

  }

	 parseURL(url) {
	    var parser = document.createElement('a'),
	        searchObject = {},
	        queries, split, i;
	    // Let the browser do the work
	    parser.href = url;
	    // Convert query string to object
	    queries = parser.search.replace(/^\?/, '').split('&');
	    for( i = 0; i < queries.length; i++ ) {
	        split = queries[i].split('=');
	        searchObject[split[0]] = split[1];
	    }
	    return {
	        protocol: parser.protocol,
	        host: parser.host,
	        hostname: parser.hostname,
	        port: parser.port,
	        pathname: parser.pathname,
	        search: parser.search,
	        searchObject: searchObject,
	        hash: parser.hash
	    };
	}

}
