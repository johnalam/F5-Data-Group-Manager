cli script datagroup_ops {


proc script::run {} {



# argv 1 command, argv 2 data-group name ,  argv 3 JSON blob of records.

switch [lindex $tmsh::argv 1] {

    "add-record" {
        tmsh::modify ltm data-group internal [lindex $tmsh::argv 2] type string records add [lindex $tmsh::argv 3]
    }
    "edit-record" {
        tmsh::modify ltm data-group internal [lindex $tmsh::argv 2] type string records modify [lindex $tmsh::argv 3]
    }
    "delete-record" {
        tmsh::modify ltm data-group internal [lindex $tmsh::argv 2] type string records delete [lindex $tmsh::argv 3] 
    }


}
}
