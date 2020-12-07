//
// Autogenerated by Thrift Compiler
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var ttypes = require('./common_types');

if (typeof nebula === 'undefined') {
  nebula = {};
}
if (typeof nebula.graph === 'undefined') {
  nebula.graph = {};
}
nebula.graph.ErrorCode = {
'SUCCEEDED' : 0,
'E_DISCONNECTED' : -1,
'E_FAIL_TO_CONNECT' : -2,
'E_RPC_FAILURE' : -3,
'E_BAD_USERNAME_PASSWORD' : -4,
'E_SESSION_INVALID' : -5,
'E_SESSION_TIMEOUT' : -6,
'E_SYNTAX_ERROR' : -7,
'E_EXECUTION_ERROR' : -8,
'E_STATEMENT_EMPTY' : -9,
'E_USER_NOT_FOUND' : -10,
'E_BAD_PERMISSION' : -11,
'E_SEMANTIC_ERROR' : -12
};
nebula.graph.ProfilingStats = function(args) {
  this.rows = null;
  this.exec_duration_in_us = null;
  this.total_duration_in_us = null;
  this.other_stats = null;
  if (args) {
    if (args.rows !== undefined) {
      this.rows = args.rows;
    }
    if (args.exec_duration_in_us !== undefined) {
      this.exec_duration_in_us = args.exec_duration_in_us;
    }
    if (args.total_duration_in_us !== undefined) {
      this.total_duration_in_us = args.total_duration_in_us;
    }
    if (args.other_stats !== undefined) {
      this.other_stats = args.other_stats;
    }
  }
};
nebula.graph.ProfilingStats.prototype = {};
nebula.graph.ProfilingStats.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I64) {
        this.rows = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.exec_duration_in_us = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I64) {
        this.total_duration_in_us = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.MAP) {
        var _size0 = 0;
        var _rtmp34;
        this.other_stats = {};
        var _ktype1 = 0;
        var _vtype2 = 0;
        _rtmp34 = input.readMapBegin();
        _ktype1 = _rtmp34.ktype;
        _vtype2 = _rtmp34.vtype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          if (_i5 > 0 ) {
            if (input.rstack.length > input.rpos[input.rpos.length -1] + 1) {
              input.rstack.pop();
            }
          }
          var key6 = null;
          var val7 = null;
          key6 = input.readString();
          val7 = input.readString();
          this.other_stats[key6] = val7;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

nebula.graph.ProfilingStats.prototype.write = function(output) {
  output.writeStructBegin('ProfilingStats');
  if (this.rows !== null && this.rows !== undefined) {
    output.writeFieldBegin('rows', Thrift.Type.I64, 1);
    output.writeI64(this.rows);
    output.writeFieldEnd();
  }
  if (this.exec_duration_in_us !== null && this.exec_duration_in_us !== undefined) {
    output.writeFieldBegin('exec_duration_in_us', Thrift.Type.I64, 2);
    output.writeI64(this.exec_duration_in_us);
    output.writeFieldEnd();
  }
  if (this.total_duration_in_us !== null && this.total_duration_in_us !== undefined) {
    output.writeFieldBegin('total_duration_in_us', Thrift.Type.I64, 3);
    output.writeI64(this.total_duration_in_us);
    output.writeFieldEnd();
  }
  if (this.other_stats !== null && this.other_stats !== undefined) {
    output.writeFieldBegin('other_stats', Thrift.Type.MAP, 4);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.other_stats));
    for (var kiter8 in this.other_stats)
    {
      if (this.other_stats.hasOwnProperty(kiter8))
      {
        var viter9 = this.other_stats[kiter8];
        output.writeString(kiter8);
        output.writeString(viter9);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

nebula.graph.PlanNodeBranchInfo = function(args) {
  this.is_do_branch = null;
  this.condition_node_id = null;
  if (args) {
    if (args.is_do_branch !== undefined) {
      this.is_do_branch = args.is_do_branch;
    }
    if (args.condition_node_id !== undefined) {
      this.condition_node_id = args.condition_node_id;
    }
  }
};
nebula.graph.PlanNodeBranchInfo.prototype = {};
nebula.graph.PlanNodeBranchInfo.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.BOOL) {
        this.is_do_branch = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.condition_node_id = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

nebula.graph.PlanNodeBranchInfo.prototype.write = function(output) {
  output.writeStructBegin('PlanNodeBranchInfo');
  if (this.is_do_branch !== null && this.is_do_branch !== undefined) {
    output.writeFieldBegin('is_do_branch', Thrift.Type.BOOL, 1);
    output.writeBool(this.is_do_branch);
    output.writeFieldEnd();
  }
  if (this.condition_node_id !== null && this.condition_node_id !== undefined) {
    output.writeFieldBegin('condition_node_id', Thrift.Type.I64, 2);
    output.writeI64(this.condition_node_id);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

nebula.graph.Pair = function(args) {
  this.key = null;
  this.value = null;
  if (args) {
    if (args.key !== undefined) {
      this.key = args.key;
    }
    if (args.value !== undefined) {
      this.value = args;
    }
  }
};
nebula.graph.Pair.prototype = {};
nebula.graph.Pair.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.key = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.value = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

nebula.graph.Pair.prototype.write = function(output) {
  output.writeStructBegin('Pair');
  if (this.key !== null && this.key !== undefined) {
    output.writeFieldBegin('key', Thrift.Type.STRING, 1);
    output.writeString(this.key);
    output.writeFieldEnd();
  }
  if (this.value !== null && this.value !== undefined) {
    output.writeFieldBegin('value', Thrift.Type.STRING, 2);
    output.writeString(this.value);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

nebula.graph.PlanNodeDescription = function(args) {
  this.name = null;
  this.id = null;
  this.output_var = null;
  this.description = null;
  this.profiles = null;
  this.branch_info = null;
  this.dependencies = null;
  if (args) {
    if (args.name !== undefined) {
      this.name = args.name;
    }
    if (args.id !== undefined) {
      this.id = args.id;
    }
    if (args.output_var !== undefined) {
      this.output_var = args.output_var;
    }
    if (args.description !== undefined) {
      this.description = args.description;
    }
    if (args.profiles !== undefined) {
      this.profiles = args.profiles;
    }
    if (args.branch_info !== undefined) {
      this.branch_info = args.branch_info;
    }
    if (args.dependencies !== undefined) {
      this.dependencies = args.dependencies;
    }
  }
};
nebula.graph.PlanNodeDescription.prototype = {};
nebula.graph.PlanNodeDescription.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.id = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.output_var = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.LIST) {
        var _size10 = 0;
        var _rtmp314;
        this.description = [];
        var _etype13 = 0;
        _rtmp314 = input.readListBegin();
        _etype13 = _rtmp314.etype;
        _size10 = _rtmp314.size;
        for (var _i15 = 0; _i15 < _size10; ++_i15)
        {
          var elem16 = null;
          elem16 = new nebula.graph.Pair();
          elem16.read(input);
          this.description.push(elem16);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.LIST) {
        var _size17 = 0;
        var _rtmp321;
        this.profiles = [];
        var _etype20 = 0;
        _rtmp321 = input.readListBegin();
        _etype20 = _rtmp321.etype;
        _size17 = _rtmp321.size;
        for (var _i22 = 0; _i22 < _size17; ++_i22)
        {
          var elem23 = null;
          elem23 = new nebula.graph.ProfilingStats();
          elem23.read(input);
          this.profiles.push(elem23);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRUCT) {
        this.branch_info = new nebula.graph.PlanNodeBranchInfo();
        this.branch_info.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.LIST) {
        var _size24 = 0;
        var _rtmp328;
        this.dependencies = [];
        var _etype27 = 0;
        _rtmp328 = input.readListBegin();
        _etype27 = _rtmp328.etype;
        _size24 = _rtmp328.size;
        for (var _i29 = 0; _i29 < _size24; ++_i29)
        {
          var elem30 = null;
          elem30 = input.readI64();
          this.dependencies.push(elem30);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

nebula.graph.PlanNodeDescription.prototype.write = function(output) {
  output.writeStructBegin('PlanNodeDescription');
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 1);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.I64, 2);
    output.writeI64(this.id);
    output.writeFieldEnd();
  }
  if (this.output_var !== null && this.output_var !== undefined) {
    output.writeFieldBegin('output_var', Thrift.Type.STRING, 3);
    output.writeString(this.output_var);
    output.writeFieldEnd();
  }
  if (this.description !== null && this.description !== undefined) {
    output.writeFieldBegin('description', Thrift.Type.LIST, 4);
    output.writeListBegin(Thrift.Type.STRUCT, this.description.length);
    for (var iter31 in this.description)
    {
      if (this.description.hasOwnProperty(iter31))
      {
        iter31 = this.description[iter31];
        iter31.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.profiles !== null && this.profiles !== undefined) {
    output.writeFieldBegin('profiles', Thrift.Type.LIST, 5);
    output.writeListBegin(Thrift.Type.STRUCT, this.profiles.length);
    for (var iter32 in this.profiles)
    {
      if (this.profiles.hasOwnProperty(iter32))
      {
        iter32 = this.profiles[iter32];
        iter32.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.branch_info !== null && this.branch_info !== undefined) {
    output.writeFieldBegin('branch_info', Thrift.Type.STRUCT, 6);
    this.branch_info.write(output);
    output.writeFieldEnd();
  }
  if (this.dependencies !== null && this.dependencies !== undefined) {
    output.writeFieldBegin('dependencies', Thrift.Type.LIST, 7);
    output.writeListBegin(Thrift.Type.I64, this.dependencies.length);
    for (var iter33 in this.dependencies)
    {
      if (this.dependencies.hasOwnProperty(iter33))
      {
        iter33 = this.dependencies[iter33];
        output.writeI64(iter33);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

nebula.graph.PlanDescription = function(args) {
  this.plan_node_descs = null;
  this.node_index_map = null;
  this.format = null;
  if (args) {
    if (args.plan_node_descs !== undefined) {
      this.plan_node_descs = args.plan_node_descs;
    }
    if (args.node_index_map !== undefined) {
      this.node_index_map = args.node_index_map;
    }
    if (args.format !== undefined) {
      this.format = args.format;
    }
  }
};
nebula.graph.PlanDescription.prototype = {};
nebula.graph.PlanDescription.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.LIST) {
        var _size34 = 0;
        var _rtmp338;
        this.plan_node_descs = [];
        var _etype37 = 0;
        _rtmp338 = input.readListBegin();
        _etype37 = _rtmp338.etype;
        _size34 = _rtmp338.size;
        for (var _i39 = 0; _i39 < _size34; ++_i39)
        {
          var elem40 = null;
          elem40 = new nebula.graph.PlanNodeDescription();
          elem40.read(input);
          this.plan_node_descs.push(elem40);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.MAP) {
        var _size41 = 0;
        var _rtmp345;
        this.node_index_map = {};
        var _ktype42 = 0;
        var _vtype43 = 0;
        _rtmp345 = input.readMapBegin();
        _ktype42 = _rtmp345.ktype;
        _vtype43 = _rtmp345.vtype;
        _size41 = _rtmp345.size;
        for (var _i46 = 0; _i46 < _size41; ++_i46)
        {
          if (_i46 > 0 ) {
            if (input.rstack.length > input.rpos[input.rpos.length -1] + 1) {
              input.rstack.pop();
            }
          }
          var key47 = null;
          var val48 = null;
          key47 = input.readI64();
          val48 = input.readI64();
          this.node_index_map[key47] = val48;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.format = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

nebula.graph.PlanDescription.prototype.write = function(output) {
  output.writeStructBegin('PlanDescription');
  if (this.plan_node_descs !== null && this.plan_node_descs !== undefined) {
    output.writeFieldBegin('plan_node_descs', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRUCT, this.plan_node_descs.length);
    for (var iter49 in this.plan_node_descs)
    {
      if (this.plan_node_descs.hasOwnProperty(iter49))
      {
        iter49 = this.plan_node_descs[iter49];
        iter49.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.node_index_map !== null && this.node_index_map !== undefined) {
    output.writeFieldBegin('node_index_map', Thrift.Type.MAP, 2);
    output.writeMapBegin(Thrift.Type.I64, Thrift.Type.I64, Thrift.objectLength(this.node_index_map));
    for (var kiter50 in this.node_index_map)
    {
      if (this.node_index_map.hasOwnProperty(kiter50))
      {
        var viter51 = this.node_index_map[kiter50];
        output.writeI64(kiter50);
        output.writeI64(viter51);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  if (this.format !== null && this.format !== undefined) {
    output.writeFieldBegin('format', Thrift.Type.STRING, 3);
    output.writeString(this.format);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

nebula.graph.ExecutionResponse = function(args) {
  this.error_code = null;
  this.latency_in_us = null;
  this.data = null;
  this.space_name = null;
  this.error_msg = null;
  this.plan_desc = null;
  this.comment = null;
  if (args) {
    if (args.error_code !== undefined) {
      this.error_code = args.error_code;
    }
    if (args.latency_in_us !== undefined) {
      this.latency_in_us = args.latency_in_us;
    }
    if (args.data !== undefined) {
      this.data = args.data;
    }
    if (args.space_name !== undefined) {
      this.space_name = args.space_name;
    }
    if (args.error_msg !== undefined) {
      this.error_msg = args.error_msg;
    }
    if (args.plan_desc !== undefined) {
      this.plan_desc = args.plan_desc;
    }
    if (args.comment !== undefined) {
      this.comment = args.comment;
    }
  }
};
nebula.graph.ExecutionResponse.prototype = {};
nebula.graph.ExecutionResponse.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.error_code = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.latency_in_us = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRUCT) {
        this.data = new nebula.DataSet();
        this.data.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.space_name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.error_msg = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRUCT) {
        this.plan_desc = new nebula.graph.PlanDescription();
        this.plan_desc.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.STRING) {
        this.comment = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

nebula.graph.ExecutionResponse.prototype.write = function(output) {
  output.writeStructBegin('ExecutionResponse');
  if (this.error_code !== null && this.error_code !== undefined) {
    output.writeFieldBegin('error_code', Thrift.Type.I32, 1);
    output.writeI32(this.error_code);
    output.writeFieldEnd();
  }
  if (this.latency_in_us !== null && this.latency_in_us !== undefined) {
    output.writeFieldBegin('latency_in_us', Thrift.Type.I32, 2);
    output.writeI32(this.latency_in_us);
    output.writeFieldEnd();
  }
  if (this.data !== null && this.data !== undefined) {
    output.writeFieldBegin('data', Thrift.Type.STRUCT, 3);
    this.data.write(output);
    output.writeFieldEnd();
  }
  if (this.space_name !== null && this.space_name !== undefined) {
    output.writeFieldBegin('space_name', Thrift.Type.STRING, 4);
    output.writeString(this.space_name);
    output.writeFieldEnd();
  }
  if (this.error_msg !== null && this.error_msg !== undefined) {
    output.writeFieldBegin('error_msg', Thrift.Type.STRING, 5);
    output.writeString(this.error_msg);
    output.writeFieldEnd();
  }
  if (this.plan_desc !== null && this.plan_desc !== undefined) {
    output.writeFieldBegin('plan_desc', Thrift.Type.STRUCT, 6);
    this.plan_desc.write(output);
    output.writeFieldEnd();
  }
  if (this.comment !== null && this.comment !== undefined) {
    output.writeFieldBegin('comment', Thrift.Type.STRING, 7);
    output.writeString(this.comment);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

nebula.graph.AuthResponse = function(args) {
  this.error_code = null;
  this.error_msg = null;
  this.session_id = null;
  if (args) {
    if (args.error_code !== undefined) {
      this.error_code = args.error_code;
    }
    if (args.error_msg !== undefined) {
      this.error_msg = args.error_msg;
    }
    if (args.session_id !== undefined) {
      this.session_id = args.session_id;
    }
  }
};
nebula.graph.AuthResponse.prototype = {};
nebula.graph.AuthResponse.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.error_code = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.error_msg = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I64) {
        this.session_id = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

nebula.graph.AuthResponse.prototype.write = function(output) {
  output.writeStructBegin('AuthResponse');
  if (this.error_code !== null && this.error_code !== undefined) {
    output.writeFieldBegin('error_code', Thrift.Type.I32, 1);
    output.writeI32(this.error_code);
    output.writeFieldEnd();
  }
  if (this.error_msg !== null && this.error_msg !== undefined) {
    output.writeFieldBegin('error_msg', Thrift.Type.STRING, 2);
    output.writeString(this.error_msg);
    output.writeFieldEnd();
  }
  if (this.session_id !== null && this.session_id !== undefined) {
    output.writeFieldBegin('session_id', Thrift.Type.I64, 3);
    output.writeI64(this.session_id);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

