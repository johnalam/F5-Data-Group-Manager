proc script::init {} {
}


proc script::run {} {


# argv 1 command, argv 2 data-group name ,  argv 3 JSON blob of records.

set record_data [lindex $tmsh::argv 3]

switch [lindex $tmsh::argv 1] {

         "add-record" {
            tmsh::modify ltm data-group internal [lindex $tmsh::argv 2] type string records add $record_data
            puts "Record [lindex $tmsh::argv 3]  added."
        }
        "edit-record" {
           tmsh::modify ltm data-group internal [lindex $tmsh::argv 2] type string records modify $record_data
           puts "Record changed [lindex $tmsh::argv 3]."
        }
        "delete-record" {
            tmsh::modify ltm data-group internal [lindex $tmsh::argv 2] type string records delete $record_data
            puts "Record [lindex $tmsh::argv 3]  deleted."
        }
        "save" {
                tmsh::save sys config
                puts "Config saved."
        }

}

}

proc script::help {} {
}

proc script::tabc {} {
}