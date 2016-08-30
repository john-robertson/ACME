$(function () {
// Define tasks
    var tasks = [{
        name: "A0990",
        intervals: [{
            from: Date.UTC(2016, 2, 22),
            to: Date.UTC(2016, 5, 13),
            label: "ID Package 1 Station and Scope"
        }]
    }, {
        name: "A0992",
        intervals: [{
            from: Date.UTC(2016, 4, 4),
            to: Date.UTC(2016, 6, 17),
            label: "Meetings with Project Stakeholders"
        }]
    }, {
        name: "A1000",
        intervals: [{
            from: Date.UTC(2016, 4, 4),
            to: Date.UTC(2016, 6, 13),
            label: "B1 (106) Project Requirements Report"
        }]
    }, {
        name: "Reference Documents (Task 2B & 2C)",
        intervals: [{
            from: Date.UTC(2016, 2, 22),
            to: Date.UTC(2016, 7, 11),
            label: "nan"
        }]
    }, {
        name: "A1100",
        intervals: [{
            from: Date.UTC(2016, 4, 11),
            to: Date.UTC(2016, 6, 3),
            label: "Program of Space Requirements"
        }]
    }, {
        name: "A1102",
        intervals: [{
            from: Date.UTC(2016, 6, 6),
            to: Date.UTC(2016, 6, 10),
            label: "NYCT Approve of PSR"
        }]
    }, {
        name: "A1104",
        intervals: [{
            from: Date.UTC(2016, 6, 13),
            to: Date.UTC(2016, 6, 14),
            label: "Environmental Assessment from NYCT CPM"
        }]
    }, {
        name: "Task 2B: Design Documents, Drawings and Specs",
        intervals: [{
            from: Date.UTC(2016, 4, 20),
            to: Date.UTC(2016, 7, 11),
            label: "nan"
        }]
    }, {
        name: "A1120",
        intervals: [{
            from: Date.UTC(2016, 6, 15),
            to: Date.UTC(2016, 6, 21),
            label: "NYCT On-Board Tech Review"
        }]
    }, {
        name: "A1124",
        intervals: [{
            from: Date.UTC(2016, 5, 27),
            to: Date.UTC(2016, 6, 3),
            label: "Concept of Operations - Package 1"
        }]
    }, {
        name: "A3920",
        intervals: [{
            from: Date.UTC(2016, 4, 20),
            to: Date.UTC(2016, 5, 19),
            label: "B4 Prepare draft of reference drawings for QA/QC"
        }]
    }, {
        name: "A3925",
        intervals: [{
            from: Date.UTC(2016, 5, 20),
            to: Date.UTC(2016, 5, 26),
            label: "Arup discipline Leads Review of Drawings"
        }]
    }, {
        name: "A3930",
        intervals: [{
            from: Date.UTC(2016, 4, 20),
            to: Date.UTC(2016, 5, 19),
            label: "B5 Prepare draft of reference specifications for QA/QC"
        }]
    }, {
        name: "A3950",
        intervals: [{
            from: Date.UTC(2016, 5, 27),
            to: Date.UTC(2016, 6, 2),
            label: "NYCT on-board review/comment"
        }]
    }, {
        name: "A3960",
        intervals: [{
            from: Date.UTC(2016, 6, 3),
            to: Date.UTC(2016, 6, 17),
            label: "Incorporate Comments and Finalize 20% Design"
        }]
    }, {
        name: "A3970",
        intervals: [{
            from: Date.UTC(2016, 6, 20),
            to: Date.UTC(2016, 6, 24),
            label: "QA/QC"
        }]
    }, {
        name: "A3980",
        intervals: [{
            from: Date.UTC(2016, 6, 27),
            to: Date.UTC(2016, 7, 7),
            label: "Submission of Final Reference Design Documents (Drawings and Specs)"
        }]
    }, {
        name: "A3990",
        intervals: [{
            from: Date.UTC(2016, 7, 8),
            to: Date.UTC(2016, 7, 11),
            label: "NYCT Review and Acceptance (11 July 2016)"
        }]
    }, {
        name: "A4160",
        intervals: [{
            from: Date.UTC(2016, 5, 27),
            to: Date.UTC(2016, 6, 17),
            label: "Review and Finalization of Technical Documents by NYCT Legal Department"
        }]
    }, {
        name: "Task 2C: Provision of Preconstruction Phase Construction Management Services",
        intervals: [{
            from: Date.UTC(2016, 2, 22),
            to: Date.UTC(2016, 5, 20),
            label: "nan"
        }]
    }, {
        name: "A4030",
        intervals: [{
            from: Date.UTC(2016, 5, 11),
            to: Date.UTC(2016, 5, 17),
            label: "Package 1 Constructability Review"
        }]
    }, {
        name: "A4040",
        intervals: [{
            from: Date.UTC(2016, 2, 22),
            to: Date.UTC(2016, 5, 13),
            label: "Package 1 Cost Estimate"
        }]
    }, {
        name: "A4050",
        intervals: [{
            from: Date.UTC(2016, 4, 25),
            to: Date.UTC(2016, 5, 20),
            label: "Package 1 Schedule"
        }]
    }, {
        name: "Task 4B - Prequalification Process",
        intervals: [{
            from: Date.UTC(2016, 2, 22),
            to: Date.UTC(2016, 7, 15),
            label: "nan"
        }]
    }, {
        name: "A1030",
        intervals: [{
            from: Date.UTC(2016, 4, 19),
            to: Date.UTC(2016, 4, 19),
            label: "General Industry Outreach"
        }]
    }, {
        name: "A1050",
        intervals: [{
            from: Date.UTC(2016, 3, 21),
            to: Date.UTC(2016, 4, 15),
            label: "Prepare Authorization to Advertise (AA)"
        }]
    }, {
        name: "A4120",
        intervals: [{
            from: Date.UTC(2016, 2, 22),
            to: Date.UTC(2016, 5, 13),
            label: "Prepare Procurement Process Procedures (PPP) (Step 1 and Step 2)"
        }]
    }, {
        name: "Pre Qual (Step 1)",
        intervals: [{
            from: Date.UTC(2016, 3, 21),
            to: Date.UTC(2016, 7, 15),
            label: "nan"
        }]
    }, {
        name: "A1060",
        intervals: [{
            from: Date.UTC(2016, 3, 21),
            to: Date.UTC(2016, 5, 11),
            label: "Prepare Solicitation Notice"
        }]
    }, {
        name: "A1068",
        intervals: [{
            from: Date.UTC(2016, 5, 12),
            to: Date.UTC(2016, 6, 9),
            label: "Solicitation Period"
        }]
    }, {
        name: "A1070",
        intervals: [{
            from: Date.UTC(2016, 6, 10),
            to: Date.UTC(2016, 6, 17),
            label: "Evaluations (Step 1)"
        }]
    }, {
        name: "A1280",
        intervals: [{
            from: Date.UTC(2016, 6, 20),
            to: Date.UTC(2016, 7, 8),
            label: "Briefing with Shortlist Teams"
        }]
    }, {
        name: "A1290",
        intervals: [{
            from: Date.UTC(2016, 7, 11),
            to: Date.UTC(2016, 7, 15),
            label: "Debrief firms not shortlisted"
        }]
    }, {
        name: "Contract Specific Documentation (Task 4B)",
        intervals: [{
            from: Date.UTC(2016, 3, 23),
            to: Date.UTC(2016, 6, 17),
            label: "nan"
        }]
    }, {
        name: "A1160",
        intervals: [{
            from: Date.UTC(2016, 3, 23),
            to: Date.UTC(2016, 5, 13),
            label: "Overview and Proposal Procedures (NYCT & PF)"
        }]
    }, {
        name: "A1162",
        intervals: [{
            from: Date.UTC(2016, 3, 23),
            to: Date.UTC(2016, 5, 20),
            label: "Terms and Conditions  (NYCT)"
        }]
    }, {
        name: "A1165",
        intervals: [{
            from: Date.UTC(2016, 3, 23),
            to: Date.UTC(2016, 5, 20),
            label: "Schedules and Appendices (NYCT)"
        }]
    }, {
        name: "A1166",
        intervals: [{
            from: Date.UTC(2016, 5, 23),
            to: Date.UTC(2016, 6, 17),
            label: "Draft Contract Specific Documentation and Update per NYCT"
        }]
    }, {
        name: "A1170",
        intervals: [{
            from: Date.UTC(2016, 4, 8),
            to: Date.UTC(2016, 6, 17),
            label: "Project Requirements and Design Criteria (Design Criteria Prepared in Task 2B)"
        }]
    }, {
        name: "A1172",
        intervals: [{
            from: Date.UTC(2016, 4, 8),
            to: Date.UTC(2016, 6, 17),
            label: "Special Conditions"
        }]
    }, {
        name: "A1174",
        intervals: [{
            from: Date.UTC(2016, 4, 11),
            to: Date.UTC(2016, 6, 17),
            label: "Division 1 - General Requirements"
        }]
    }, {
        name: "A1176",
        intervals: [{
            from: Date.UTC(2016, 4, 8),
            to: Date.UTC(2016, 6, 17),
            label: "Proposer's Proposal/Price Schedule"
        }]
    }, {
        name: "A1182",
        intervals: [{
            from: Date.UTC(2016, 3, 23),
            to: Date.UTC(2016, 5, 20),
            label: "Contract Execution  (NYCT)"
        }]
    }, {
        name: "A4180",
        intervals: [{
            from: Date.UTC(2016, 4, 8),
            to: Date.UTC(2016, 6, 17),
            label: "Concurrent NYCT Legal Review"
        }]
    }, {
        name: "RFP (Task 4B) (Step 2)",
        intervals: [{
            from: Date.UTC(2016, 6, 20),
            to: Date.UTC(2016, 9, 19),
            label: "nan"
        }]
    }, {
        name: "A1150",
        intervals: [{
            from: Date.UTC(2016, 6, 20),
            to: Date.UTC(2016, 7, 11),
            label: "Consolidate and QA/QC RFP Documents"
        }]
    }, {
        name: "A1190",
        intervals: [{
            from: Date.UTC(2016, 7, 12),
            to: Date.UTC(2016, 9, 6),
            label: "Proposers Advance Design and Complete Price / Proposal"
        }]
    }, {
        name: "A1220",
        intervals: [{
            from: Date.UTC(2016, 9, 7),
            to: Date.UTC(2016, 9, 19),
            label: "Evaluation (Step 2) of all Proposals / Selection Process - Including BAFO"
        }]
    }, {
        name: "A1330",
        intervals: [{
            from: Date.UTC(2016, 7, 25),
            to: Date.UTC(2016, 7, 29),
            label: "One on One meetings with teams that requested"
        }]
    }, {
        name: "A1340",
        intervals: [{
            from: Date.UTC(2016, 8, 1),
            to: Date.UTC(2016, 8, 8),
            label: "Possible Addendum to contract based on one on one meetings"
        }]
    }, {
        name: "Approval & Award (Task 4B)",
        intervals: [{
            from: Date.UTC(2016, 9, 20),
            to: Date.UTC(2016, 11, 1),
            label: "nan"
        }]
    }, {
        name: "A1240",
        intervals: [{
            from: Date.UTC(2016, 9, 20),
            to: Date.UTC(2016, 9, 26),
            label: "Prepare Internal Documents to Obtain Approval"
        }]
    }, {
        name: "A1260",
        intervals: [{
            from: Date.UTC(2016, 9, 27),
            to: Date.UTC(2016, 9, 30),
            label: "Conduct Negotiations with Preferred Proposers"
        }]
    }, {
        name: "A1282",
        intervals: [{
            from: Date.UTC(2016, 10, 3),
            to: Date.UTC(2016, 11, 1),
            label: "Proposers Finalizes Insurance, Schedule etc"
        }]
    }, {
        name: "30%-100% Design",
        intervals: [{
            from: Date.UTC(2016, 11, 2),
            to: Date.UTC(2017, 3, 13),
            label: "nan"
        }]
    }, {
        name: "A1310",
        intervals: [{
            from: Date.UTC(2016, 11, 2),
            to: Date.UTC(2017, 3, 13),
            label: "30%-100% Design"
        }]
    }, {
        name: "Construction",
        intervals: [{
            from: Date.UTC(2017, 2, 2),
            to: Date.UTC(2017, 11, 2),
            label: "nan"
        }]
    }, {
        name: "A1320",
        intervals: [{
            from: Date.UTC(2017, 2, 2),
            to: Date.UTC(2017, 11, 2),
            label: "Construction"
        }]
    }];

    var series = [];
    $(function () {
            var series = [];
            $.each(tasks.reverse(), function(i, task) {
                var item = {
                    name: task.name, data: []
                };
                $.each(task.intervals, function(j, interval) {
                    item.data.push({
                        x: interval.from, y: i, label: interval.label, from: interval.from, to: interval.to
                    }, {
                        x: interval.to, y: i, from: interval.from, to: interval.to
                    });
// add a null value between intervals
                    if (task.intervals[j + 1]) {
                        item.data.push(
                            [(interval.to + task.intervals[j + 1].from) / 2, null]
                        );
                    }
                });
                series.push(item);
            });

// create the chart
            var chart = new Highcharts.Chart({
                chart: {
                    renderTo: 'container'
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    line: {
                        dataLabels: {
                            align: 'left',
                            enabled: true,
                            formatter: function() {
                            return this.point.options && this.point.options.label;
        }
        },
            lineWidth: 10,
                marker: {
                enabled: false
            }
        }
        },
            series: series,
                title: {
                text: 'Gantt Chart'
            },
            tooltip: {
                formatter: function() {
                return '<b>'+ tasks[this.y].name + '</b><br/>' +
                    Highcharts.dateFormat('%m-%d-%Y', this.point.options.from) +
                    ' - ' + Highcharts.dateFormat('%m-%d-%Y', this.point.options.to);
            }
        },
        xAxis: {
        showFirstLabel: false,
            showLastLabel: false,
            startOnTick: false,
            type: 'datetime'
    },
    yAxis: {
        categories: ['A1320', 'Construction', 'A1310', '30%-100% Design', 'A1282', 'A1260', 'A1240', 'Approval & Award (Task 4B)', 'A1340', 'A1330', 'A1220', 'A1190', 'A1150', 'RFP (Task 4B) (Step 2)', 'A4180', 'A1182', 'A1176', 'A1174', 'A1172', 'A1170', 'A1166', 'A1165', 'A1162', 'A1160', 'Contract Specific Documentation (Task 4B)', 'A1290', 'A1280', 'A1070', 'A1068', 'A1060', 'Pre Qual (Step 1)', 'A4120', 'A1050', 'A1030', 'Task 4B - Prequalification Process', 'A4050', 'A4040', 'A4030', 'Task 2C: Provision of Preconstruction Phase Construction Management Services', 'A4160', 'A3990', 'A3980', 'A3970', 'A3960', 'A3950', 'A3930', 'A3925', 'A3920', 'A1124', 'A1120', 'Task 2B: Design Documents, Drawings and Specs', 'A1104', 'A1102', 'A1100', 'Reference Documents (Task 2B & 2C)', 'A1000', 'A0992', 'A0990'],
            endOnTick: false,
            labels: {
            distance: 15,
                style: {color: '#525151', font: '12px Helvetica', fontWeight: 'bold'}
        },
        maxPadding: 0.200000,
            minPadding: 0.200000,
            showFirstLabel: false,
            showLastLabel: false,
            startOnTick: false,
            tickInterval: 1,
            tickPixelInterval: 200,
            title: {
            text: 'Criteria'
        }
    }
});
})});